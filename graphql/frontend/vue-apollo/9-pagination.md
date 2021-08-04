Next up we’ll cover pagination. You’ll implement a simple pagination approach so that users are able to view the links in smaller chunks rather than having an extremely long list of `Link` elements.

Preparing the VueJS Components
------------------------------

Once more, you first need to prepare the VueJS components for this new functionality. In fact, we’ll slightly adjust the current routing setup. Here’s the idea: The `LinkList` component will be used for two different use cases (and routes). The first one is to display the 10 top voted links. Its second use case is to display new links in a list separated into multiple pages that the user can navigate through.

Open `src/router/index.js` and adjust the routes like so:

    routes: [
      {
        path: '/',
        redirect: '/new/1'
      },
      {
        path: '/create',
        component: CreateLink
      },
      {
        path: '/login',
        component: AppLogin
      },
      {
        path: '/new/:page',
        component: LinkList
      },
      {
        path: '/search',
        component: Search
      },
      {
        path: '/top',
        component: LinkList
      }
    ]

You added two new routes: `/top` and `/new/:page`. The second one reads the value for `page` from the url so that this information is available inside the component that’s rendered, here that’s `LinkList`.

The root route `/` now redirects to the first page of the route where new posts are displayed.

You need to update the `AppHeader` component to show the new `/top` route:

Open `src/components/AppHeader.vue` and add `top`. This component’s template should now look like this:

    <template>
      <div class="flex pa1 justify-between nowrap orange">
        <div class="flex flex-fixed black">
          <div class="fw7 mr1">Hacker News</div>
          <router-link to="/" class="ml1 no-underline black">new</router-link>
          <div class="ml1">|</div>
          <router-link to="/top" class="ml1 no-underline black">top</router-link>
          <div class="ml1">|</div>
          <router-link to="/search" class="ml1 no-underline black">search</router-link>
          <div class="flex" v-if="userId">
            <div class="ml1">|</div>
            <router-link to="/create" class="ml1 no-underline black">submit</router-link>
          </div>
        </div>
        <div class="flex flex-fixed">
          <div v-if="userId" class="ml1 pointer black" @click="logout()">logout</div>
          <router-link v-else to="/login" class="ml1 no-underline black">login</router-link>
        </div>
      </div>
    </template>

We need to add quite a bit of logic to the `LinkList` component to account for the two different responsibilities that it now has.

Open `src/constants/graphql.js` and add three arguments to the `AllLinksQuery` by replacing the `ALL_LINKS_QUERY` definition with the following. Note that you are also adding the `count` property from `_allLinksMeta` so that you have access to the count of links:

    export const ALL_LINKS_QUERY = gql`
      query AllLinksQuery($first: Int, $skip: Int, $orderBy: LinkOrderBy) {
        allLinks(first: $first, skip: $skip, orderBy: $orderBy) {
          id
          createdAt
          url
          description
          postedBy {
            id
            name
          }
          votes {
            id
            user {
              id
            }
          }
        }
        _allLinksMeta {
          count
        }
      }
    `

The query now accepts arguments that we’ll use to implement pagination and ordering. `skip` defines the *offset* where the query will start. If you passed a value of e.g. `10` to this argument, it means that the first 10 items of the list will not be included in the response. `first` then defines the *limit*, or *how many* elements, you want to load from that list. Say, you’re passing the `10` for `skip` and `5` for `first`, you’ll receive items 10 to 15 from the list.

You need to update the references to this query in the `CreateLink` component.

Open `src/components/CreateLink.vue` and update the `update` callback within the mutation to look like this:

    update: (store, { data: { createLink } }) => {
      const data = store.readQuery({
        query: ALL_LINKS_QUERY,
        variables: {
          first: 5,
          skip: 0,
          orderBy: 'createdAt_DESC'
        }
      })
      data.allLinks.push(createLink)
      store.writeQuery({
        query: ALL_LINKS_QUERY,
        variables: {
          first: 5,
          skip: 0,
          orderBy: 'createdAt_DESC'
        },
        data
      })
    }

You also need to add variables in `voteForLink` method in `LinkItem` component.

Open `src/components/LinkItem.vue` and update the `updateStoreAfterVote` callback within the methods object to look like this:

    updateStoreAfterVote (store, createVote, linkId) {
      const data = store.readQuery({
        query: ALL_LINKS_QUERY,
        variables: {     
          first: 5,
          skip: 0,
          orderBy: 'createdAt_DESC'
        }
      })
      const votedLink = data.allLinks.find(link => link.id === linkId)
      votedLink.votes = createVote.link.votes
      store.writeQuery({query: ALL_LINKS_QUERY, data})
    }

Here you are simply adding the variables that this query now expects.

Next, open `src/components/LinkList.vue` and add the following `variables` and `update` callback to `allLinks` within the `apollo` object:

    variables () {
      const page = parseInt(this.$route.params.page, 10)
      const isNewPage = this.$route.path.includes('new')
      const skip = isNewPage ? (page - 1) * LINKS_PER_PAGE : 0
      const first = isNewPage ? LINKS_PER_PAGE : 100
      const orderBy = isNewPage ? 'createdAt_DESC' : null
      return {
        first,
        skip,
        orderBy
      }
    },
    update (data) {
      this.count = data._allLinksMeta.count
      return data.allLinks
    }

You’ve set the `variables` to a function which runs before the query is executed. This allows you to retrieve the information about the current page from the router (`this.$route.params.page`) and use it to calculate the chunk of links that you retrieve with `first` and `skip`.

Also note that you’re including the ordering attribute `createdAt_DESC` for the `new` page to make sure the newest links are displayed first. The ordering for the `/top` route will be calculated manually based on the number of votes for each link.

Still in `src/components/LinkList.vue` you also need to update the `updateQuery` method like so:

    updateQuery: (previous, { subscriptionData }) => {
      const newAllLinks = [
        subscriptionData.data.Link.node,
        ...previous.allLinks
      ]
      const result = {
        ...previous,
        allLinks: newAllLinks.slice(0, LINKS_PER_PAGE)
      }
      return result
    }

This change ensures that only the most recent `LINKS_PER_PAGE` links will be shown even after an update through subscriptions.

You also need to define the `LINKS_PER_PAGE` constant and then import it into the `LinkList` component as well as the `LinkItem` component.

Open `src/constants/settings.js` and add the following definition:

    export const LINKS_PER_PAGE = 5

Now add an import statement from `../constants/settings` in `src/components/LinkList.vue`:

    import { LINKS_PER_PAGE } from '../constants/settings'

Add an import statement from `../constants/settings` in `src/components/LinkItem.vue` as well:

    import { LINKS_PER_PAGE } from '../constants/settings'

You also need to map `linksPerPage` to `LINKS_PER_PAGE` in `src/components/LinkItem.vue`.

Add a `data` property to the `LinkItem` component:

    data () {
      return {
        linksPerPage: LINKS_PER_PAGE
      }
    }

### Implementing Navigation

Next, you need functionality for the user to switch between the pages. First add two `button` elements to the bottom of the `LinkList` component that can be used to navigate back and forth.

Open `src/components/LinkList.vue` and update the `template` to look like the following:

    <template>
      <div>
        <div>
          <link-item
            v-for="(link, index) in orderedLinks"
            :key="link.id"
            :link="link"
            :index="index"
            :pageNumber="pageNumber">
          </link-item>
        </div>
        <div v-if="isNewPage">
          <button v-show="!isFirstPage" @click="previousPage()">Previous</button>
          <button v-show="morePages" @click="nextPage()">Next</button>
        </div>
      </div>
    </template>

Since you added `pageNumber` as one of the `props` on `LinkItem`, you now need to add it to the `props` array of the `LinkItem` component.

Open `src/components/LinkItem.vue` and update the `props` array to also include `pageNumber`:

    props: ['link', 'index', 'pageNumber']

Since the setup is slightly more complicated now, you are going to calculate the list of links to be rendered in a separate method.

In `src/components/LinkList.vue`, add the following method:

    getLinksToRender (isNewPage) {
      if (isNewPage) {
        return this.$apollo.queries.allLinks
      }
      const rankedLinks = this.$apollo.queries.allLinks.slice()
      rankedLinks.sort((l1, l2) => l2.votes.length - l1.votes.length)
      return rankedLinks
    }

For the `isNewPage`, you’ll simply return all the links returned by the query. That’s logical since here you don’t have to make any manual modifications to the list that is to be rendered. If the user loaded the component from the `/top` route, you’ll sort the list according to the number of votes and return the top 10 links. This is accomplished through an `orderedLinks` computed property which you will implement next.

You will make use of the [lodash](https://lodash.com/) library within the `orderedLinks` function.

Open a terminal window and within your project directory run the following command:

    npm install --save lodash

Now, in `src/components/LinkList.vue` near the top of the `script` block import `lodash`:

    import _ from 'lodash'

Still in `src/components/LinkList.vue` implement the following within the `computed` object:

    orderedLinks: function () {
      if (this.$route.path.includes('top')) {
        return _.orderBy(this.allLinks, 'votes.length').reverse()
      } else {
        return this.allLinks
      }
    }

Still in `src/components/LinkList.vue` there are four more `computed` properties you need to add as follows:

    isFirstPage () {
      return this.$route.params.page === '1'
    },
    isNewPage () {
      return this.$route.path.includes('new')
    },
    pageNumber (index) {
      return parseInt(this.$route.params.page, 10)
    },
    morePages () {
      return parseInt(this.$route.params.page, 10) < this.count / LINKS_PER_PAGE
    }

You also need to add a `count` property to the `LinkList` `data` property.

Still in `src/components/LinkList.vue` add `count` to `data` and initialize it to 0:

    data () {
      return {
        allLinks: [],
        count: 0,
        loading: 0
      }
    }

Next, you’ll implement the functionality for the *Previous*- and *Next*-buttons.

In `src/components/LinkList.vue`, add the following two methods that will be called when the buttons are pressed:

    nextPage () {
      const page = parseInt(this.$route.params.page, 10)
      if (page < this.count / LINKS_PER_PAGE) {
        const nextPage = page + 1
        this.$router.push({path: `/new/${nextPage}`})
      }
    },
    previousPage () {
      const page = parseInt(this.$route.params.page, 10)
      if (page > 1) {
        const previousPage = page - 1
        this.$router.push({path: `/new/${previousPage}`})
      }
    }

The implementation of these is very simple. You’re retrieving the current page from the url and implementing a sanity check to make sure that it makes sense to paginate back or forth. Then you simply calculate the next page and tell the router where to navigate next. The router will then reload the component with a new `page` in the url that will be used to calculate the right chunk of links to load. Hop on over to the running app and use the new buttons to paginate through your list of links!

You have now added a simple pagination system to the app, allowing users to load links in small chunks instead of loading them all up front.
