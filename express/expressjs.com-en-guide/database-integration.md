# Database integration

Adding the capability to connect databases to Express apps is just a matter of loading an appropriate Node.js driver for the database in your app. This document briefly explains how to add and use some of the most popular Node.js modules for database systems in your Express app:

- [Cassandra](#cassandra)
- [Couchbase](#couchbase)
- [CouchDB](#couchdb)
- [LevelDB](#leveldb)
- [MySQL](#mysql)
- [MongoDB](#mongodb)
- [Neo4j](#neo4j)
- [Oracle](#oracle)
- [PostgreSQL](#postgresql)
- [Redis](#redis)
- [SQL Server](#sql-server)
- [SQLite](#sqlite)
- [Elasticsearch](#elasticsearch)

These database drivers are among many that are available. For other options, search on the [npm](https://www.npmjs.com/) site.

## Cassandra

**Module**: [cassandra-driver](https://github.com/datastax/nodejs-driver)

### Installation

    $ npm install cassandra-driver

### Example

    var cassandra = require('cassandra-driver')
    var client = new cassandra.Client({ contactPoints: ['localhost'] })

    client.execute('select key from system.local', function (err, result) {
      if (err) throw err
      console.log(result.rows[0])
    })

## Couchbase

**Module**: [couchnode](https://github.com/couchbase/couchnode)

### Installation

    $ npm install couchbase

### Example

    var couchbase = require('couchbase')
    var bucket = (new couchbase.Cluster('http://localhost:8091')).openBucket('bucketName')

    // add a document to a bucket
    bucket.insert('document-key', { name: 'Matt', shoeSize: 13 }, function (err, result) {
      if (err) {
        console.log(err)
      } else {
        console.log(result)
      }
    })

    // get all documents with shoe size 13
    var n1ql = 'SELECT d.* FROM `bucketName` d WHERE shoeSize = $1'
    var query = N1qlQuery.fromString(n1ql)
    bucket.query(query, [13], function (err, result) {
      if (err) {
        console.log(err)
      } else {
        console.log(result)
      }
    })

## CouchDB

**Module**: [nano](https://github.com/dscape/nano)

### Installation

    $ npm install nano

### Example

    var nano = require('nano')('http://localhost:5984')
    nano.db.create('books')
    var books = nano.db.use('books')

    // Insert a book document in the books database
    books.insert({ name: 'The Art of war' }, null, function (err, body) {
      if (err) {
        console.log(err)
      } else {
        console.log(body)
      }
    })

    // Get a list of all books
    books.list(function (err, body) {
      if (err) {
        console.log(err)
      } else {
        console.log(body.rows)
      }
    })

## LevelDB

**Module**: [levelup](https://github.com/rvagg/node-levelup)

### Installation

    $ npm install level levelup leveldown

### Example

    var levelup = require('levelup')
    var db = levelup('./mydb')

    db.put('name', 'LevelUP', function (err) {
      if (err) return console.log('Ooops!', err)

      db.get('name', function (err, value) {
        if (err) return console.log('Ooops!', err)

        console.log('name=' + value)
      })
    })

## MySQL

**Module**: [mysql](https://github.com/felixge/node-mysql/)

### Installation

    $ npm install mysql

### Example

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'dbuser',
      password: 's3kreee7',
      database: 'my_db'
    })

    connection.connect()

    connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
      if (err) throw err

      console.log('The solution is: ', rows[0].solution)
    })

    connection.end()

## MongoDB

**Module**: [mongodb](https://github.com/mongodb/node-mongodb-native)

### Installation

    $ npm install mongodb

### Example (v2.\*)

    var MongoClient = require('mongodb').MongoClient

    MongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
      if (err) throw err

      db.collection('mammals').find().toArray(function (err, result) {
        if (err) throw err

        console.log(result)
      })
    })

### Example (v3.\*)

    var MongoClient = require('mongodb').MongoClient

    MongoClient.connect('mongodb://localhost:27017/animals', function (err, client) {
      if (err) throw err

      var db = client.db('animals')

      db.collection('mammals').find().toArray(function (err, result) {
        if (err) throw err

        console.log(result)
      })
    })

If you want an object model driver for MongoDB, look at [Mongoose](https://github.com/LearnBoost/mongoose).

## Neo4j

**Module**: [neo4j-driver](https://github.com/neo4j/neo4j-javascript-driver)

### Installation

    $ npm install neo4j-driver

### Example

    var neo4j = require('neo4j-driver')
    var driver = neo4j.driver('neo4j://localhost:7687', neo4j.auth.basic('neo4j', 'letmein'))

    var session = driver.session()

    session.readTransaction(function (tx) {
      return tx.run('MATCH (n) RETURN count(n) AS count')
        .then(function (res) {
          console.log(res.records[0].get('count'))
        })
        .catch(function (error) {
          console.log(error)
        })
    })

## Oracle

**Module**: [oracledb](https://github.com/oracle/node-oracledb)

### Installation

NOTE: [See installation prerequisites](https://github.com/oracle/node-oracledb#-installation).

    $ npm install oracledb

### Example

    const oracledb = require('oracledb')
    const config = {
      user: '<your db user>',
      password: '<your db password>',
      connectString: 'localhost:1521/orcl'
    }

    async function getEmployee (empId) {
      let conn

      try {
        conn = await oracledb.getConnection(config)

        const result = await conn.execute(
          'select * from employees where employee_id = :id',
          [empId]
        )

        console.log(result.rows[0])
      } catch (err) {
        console.log('Ouch!', err)
      } finally {
        if (conn) { // conn assignment worked, need to close
          await conn.close()
        }
      }
    }

    getEmployee(101)

## PostgreSQL

**Module**: [pg-promise](https://github.com/vitaly-t/pg-promise)

### Installation

    $ npm install pg-promise

### Example

    var pgp = require('pg-promise')(/* options */)
    var db = pgp('postgres://username:password@host:port/database')

    db.one('SELECT $1 AS value', 123)
      .then(function (data) {
        console.log('DATA:', data.value)
      })
      .catch(function (error) {
        console.log('ERROR:', error)
      })

## Redis

**Module**: [redis](https://github.com/mranney/node_redis)

### Installation

    $ npm install redis

### Example

    var redis = require('redis')
    var client = redis.createClient()

    client.on('error', function (err) {
      console.log('Error ' + err)
    })

    client.set('string key', 'string val', redis.print)
    client.hset('hash key', 'hashtest 1', 'some value', redis.print)
    client.hset(['hash key', 'hashtest 2', 'some other value'], redis.print)

    client.hkeys('hash key', function (err, replies) {
      console.log(replies.length + ' replies:')

      replies.forEach(function (reply, i) {
        console.log('    ' + i + ': ' + reply)
      })

      client.quit()
    })

## SQL Server

**Module**: [tedious](https://github.com/tediousjs/tedious)

### Installation

    $ npm install tedious

### Example

    var Connection = require('tedious').Connection
    var Request = require('tedious').Request

    var config = {
      server: 'localhost',
      authentication: {
        type: 'default',
        options: {
          userName: 'your_username', // update me
          password: 'your_password' // update me
        }
      }
    }

    var connection = new Connection(config)

    connection.on('connect', function (err) {
      if (err) {
        console.log(err)
      } else {
        executeStatement()
      }
    })

    function executeStatement () {
      request = new Request("select 123, 'hello world'", function (err, rowCount) {
        if (err) {
          console.log(err)
        } else {
          console.log(rowCount + ' rows')
        }
        connection.close()
      })

      request.on('row', function (columns) {
        columns.forEach(function (column) {
          if (column.value === null) {
            console.log('NULL')
          } else {
            console.log(column.value)
          }
        })
      })

      connection.execSql(request)
    }

## SQLite

**Module**: [sqlite3](https://github.com/mapbox/node-sqlite3)

### Installation

    $ npm install sqlite3

### Example

    var sqlite3 = require('sqlite3').verbose()
    var db = new sqlite3.Database(':memory:')

    db.serialize(function () {
      db.run('CREATE TABLE lorem (info TEXT)')
      var stmt = db.prepare('INSERT INTO lorem VALUES (?)')

      for (var i = 0; i < 10; i++) {
        stmt.run('Ipsum ' + i)
      }

      stmt.finalize()

      db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
        console.log(row.id + ': ' + row.info)
      })
    })

    db.close()

## Elasticsearch

**Module**: [elasticsearch](https://github.com/elastic/elasticsearch-js)

### Installation

    $ npm install elasticsearch

### Example

    var elasticsearch = require('elasticsearch')
    var client = elasticsearch.Client({
      host: 'localhost:9200'
    })

    client.search({
      index: 'books',
      type: 'book',
      body: {
        query: {
          multi_match: {
            query: 'express js',
            fields: ['title', 'description']
          }
        }
      }
    }).then(function (response) {
      var hits = response.hits.hits
    }, function (error) {
      console.trace(error.message)
    })
