### Goal for this chapter

To match the schema from the first chapter, we have to extend a `Link` model with an additional field: `createdAt`. This field will store information about date and time. The problem is that `H2` database understands only timestamp. Sangria has a similar limitation - it supports only basic types. Our goal is to store the date an time information in the database and to present it in a human friendly format.

### Extend a Link model

The type for storing date and time I chose is `akka.http.scaladsl.model.DateTime`. It fits our example because it has implemented ISO Format converters. (This type covers all my needs without any additional work. So I chose it, but in real, production application avoid this if you can. Java has dedicated package for date and time and it includes many classes you can use.)

Change the content of `Link.scala`:

    //in imports:
    import akka.http.scaladsl.model.DateTime

    //replace current case class
    case class Link(id: Int, url: String, description: String, createdAt: DateTime)

### Fix the database

Currently in `DbSchema` we’re storing few links in database. We have to add the additional field.

Add the `createdAt` field in the `Link` models for populated example data in `DBSchema`. Change the `databaseSetup` function into the following code:

    Links forceInsertAll Seq(
          Link(1, "http://howtographql.com", "Awesome community driven GraphQL tutorial", DateTime(2017,9,12)),
          Link(2, "http://graphql.org", "Official GraphQL web page",DateTime(2017,10,1)),
          Link(3, "https://graphql.org/", "GraphQL specification",DateTime(2017,10,2))
        )

Almost good, but `H2` doesn’t know how to store such type in database, so we will instruct it how to store it using built-in types.

Add column mapper for our `DateTime` type in `DBSchema` object (before the `LinksTable` definition).

    //ads to imports:
    import java.sql.Timestamp


    //and at the begining of the class' body:
    implicit val dateTimeColumnType = MappedColumnType.base[DateTime, Timestamp](
        dt => new Timestamp(dt.clicks),
        ts => DateTime(ts.getTime)
    )

This mapper will convert `DateTime` into `Long`, which is a primitive recognized by H2.

The last thing is to add the `createdAt` column definition in the table declaration.

Add the following code inside `LinksTable` class. Replace the current `*` function with the following one.

    def createdAt = column[DateTime]("CREATED_AT")

    def * = (id, url, description, createdAt).mapTo[Link]

---

In current state the `DBSchema` file should have following content:

    package com.howtographql.scala.sangria

    import java.sql.Timestamp

    import akka.http.scaladsl.model.DateTime
    import com.howtographql.scala.sangria.models._
    import slick.jdbc.H2Profile.api._

    import scala.concurrent.duration._
    import scala.concurrent.Await
    import scala.language.postfixOps


    object DBSchema {

      implicit val dateTimeColumnType = MappedColumnType.base[DateTime, Timestamp](
        dt => new Timestamp(dt.clicks),
        ts => DateTime(ts.getTime)
      )


      class LinksTable(tag: Tag) extends Table[Link](tag, "LINKS"){

        def id = column[Int]("ID", O.PrimaryKey, O.AutoInc)
        def url = column[String]("URL")
        def description = column[String]("DESCRIPTION")
        def createdAt = column[DateTime]("CREATED_AT")

        def * = (id, url, description, createdAt).mapTo[Link]

      }

      val Links = TableQuery[LinksTable]

      /**
        * Load schema and populate sample data withing this Sequence od DBActions
        */
      val databaseSetup = DBIO.seq(
        Links.schema.create,

        Links forceInsertAll Seq(
          Link(1, "http://howtographql.com", "Awesome community driven GraphQL tutorial", DateTime(2017,9,12)),
          Link(2, "http://graphql.org", "Official GraphQL web page",DateTime(2017,10,1)),
          Link(3, "https://graphql.org/", "GraphQL specification",DateTime(2017,10,2))
        )

      )


      def createDatabase: DAO = {
        val db = Database.forConfig("h2mem")

        Await.result(db.run(databaseSetup), 10 seconds)

        new DAO(db)

      }

    }

### Define custom scalar for DateTime

Sangria supports scalars for basic GraphQL types like `String`, `Int`, etc. In addition you can find scalars for types like `Long`, `BigInt` or `BigDecimal`. There are a lot of them, but you might encounter situations where custom or unsupported types should be used. Like in our example, we use `DateTime` type and there are no built-in scalar for such. To add support for our case, we will use the same trick as with H2. We will define conversions between type we want and type Sangria understand and then back again to our type. The best underlying type would be String, so we will use in our implementation.

Let’s write a scalar that converts `String` to `DateTime` and vice versa.

In `GraphQLSchema` add the following code:

    //imports:
    import sangria.ast.StringValue

    //begining of the object's body:
    implicit val GraphQLDateTime = ScalarType[DateTime](//1
      "DateTime",//2
      coerceOutput = (dt, _) => dt.toString, //3
      coerceInput = { //4
        case StringValue(dt, _, _ ) => DateTime.fromIsoDateTimeString(dt).toRight(DateTimeCoerceViolation)
        case _ => Left(DateTimeCoerceViolation)
      },
      coerceUserInput = { //5
        case s: String => DateTime.fromIsoDateTimeString(s).toRight(DateTimeCoerceViolation)
        case _ => Left(DateTimeCoerceViolation)
      }
    )

1.  Use `implicit` because it implicitly has to be in scope
2.  `"DateTime"`. The name will be used in schemas.
3.  `coerceOutput` converts our type to a String. It will be used to produce the output data.
4.  `coerceInput` needs a partial function with `Value` as single argument. Such value could be of many types. In our case we’re parsing only from `StringValue`. Of course nothing stops you from defining many conversions. If you define more cases for coerceInput, users will have the freedom to provide input in more ways.
5.  `coerceUserInput` converts Literal which almost always is a String. While this function should cover basic types, `coerceInput` and `coerceOutput` should always be a value that the GraphQL grammar supports.

Both functions `coerceInput` and `coerceUserInput` should respond with `Either`. The correct (right) value should consist an object of expected type. In case of failure, the left value should contain a `Violation` subtype. Sangria provides many `Violation` subtypes, but in the code above you can see I’ve used `DateTimeCoerceViolation`. Let’s implement this.

Add in the models package object the following definition:

    //imports header:
    import sangria.validation.Violation

    //package body:
      case object DateTimeCoerceViolation extends Violation {
        override def errorMessage: String = "Error during parsing DateTime"
      }

Finally, add the new field definition to the `LinkType`.

replace `LinkType` definition in the `GraphQLSchema` file with the following piece of code:

       val LinkType = ObjectType[Unit, Link](
          "Link",
          fields[Unit, Link](
            Field("id", IntType, resolve = _.value.id),
            Field("url", StringType, resolve = _.value.url),
            Field("description", StringType, resolve = _.value.description),
            Field("createdAt", GraphQLDateTime, resolve= _.value.createdAt)
          )
        )

In case you’ve used derived version of LinkType you have to manage this additional field another way. Because Macro don’t know the type you want to use you have to define it explicitly. Good news is that you have to define only this field - the rest is still managed by macro.

In case of derived LinkType, the definition should looks like this:

      val LinkType = deriveObjectType[Unit, Link](
        ReplaceField("createdAt", Field("createdAt", GraphQLDateTime, resolve = _.value.createdAt))
      )

---

After the last changes `GraphQLSchema` file should looks like this:

    package com.howtographql.scala.sangria

    import akka.http.scaladsl.model.DateTime
    import sangria.schema.{ListType, ObjectType}
    import models._
    import sangria.ast.StringValue
    import sangria.execution.deferred.{DeferredResolver, Fetcher, HasId}
    import sangria.schema._
    import sangria.macros.derive._

    object GraphQLSchema {

      implicit val GraphQLDateTime = ScalarType[DateTime](//1
        "DateTime",//2
        coerceOutput = (dt, _) => dt.toString, //3
        coerceInput = { //4
          case StringValue(dt, _, _ ) => DateTime.fromIsoDateTimeString(dt).toRight(DateTimeCoerceViolation)
          case _ => Left(DateTimeCoerceViolation)
        },
        coerceUserInput = { //5
          case s: String => DateTime.fromIsoDateTimeString(s).toRight(DateTimeCoerceViolation)
          case _ => Left(DateTimeCoerceViolation)
        }
      )


      val LinkType = deriveObjectType[Unit, Link](
        ReplaceField("createdAt", Field("createdAt", GraphQLDateTime, resolve = _.value.createdAt))
      )

      implicit val linkHasId = HasId[Link, Int](_.id)

      val linksFetcher = Fetcher(
        (ctx: MyContext, ids: Seq[Int]) => ctx.dao.getLinks(ids)
      )

      val Resolver = DeferredResolver.fetchers(linksFetcher)


      val Id = Argument("id", IntType)
      val Ids = Argument("ids", ListInputType(IntType))

      val QueryType = ObjectType(
        "Query",
        fields[MyContext, Unit](
          Field("allLinks", ListType(LinkType), resolve = c => c.ctx.dao.allLinks),
          Field("link",
            OptionType(LinkType),
            arguments = Id :: Nil,
            resolve = c => linksFetcher.deferOpt(c.arg(Id))
          ),
          Field("links",
            ListType(LinkType),
            arguments = Ids :: Nil,
            resolve = c => linksFetcher.deferSeq(c.arg(Ids))
          )
        )
      )

      val SchemaDefinition = Schema(QueryType)
    }

Now when you’ll add `createdAt` field to the query, you should get proper response. For example on query:

    query {

      link(id: 1){
            id
            url
            createdAt
        }
      }

You will get a response:

    {
      "data": {
        "link": {
          "id": 1,
          "url": "http://howtographql.com",
          "createdAt": "2017-09-12T00:00:00"
        }
      }
    }

Now you know the basics. In the next chapter you will add additional models. We will extract some common parts as interface to keep them in one place.
