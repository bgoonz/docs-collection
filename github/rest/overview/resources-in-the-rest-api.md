---
title: Resources in the REST API
intro: 'Learn how to navigate the resources provided by the {% data variables.product.prodname_dotcom %} API.'
redirect_from:
  - /rest/initialize-the-repo/
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
---


This describes the resources that make up the official {% data variables.product.product_name %} REST API. If you have any problems or requests, please contact {% data variables.contact.contact_support %}.

## Current version

By default, all requests to `{% data variables.product.api_url_code %}` receive the **v3** [version](/developers/overview/about-githubs-apis) of the REST API.
We encourage you to [explicitly request this version via the `Accept` header](/rest/overview/media-types#request-specific-version).

    Accept: application/vnd.github.v3+json

{% ifversion fpt %}

For information about GitHub's GraphQL API, see the [v4 documentation](/graphql). For information about migrating to GraphQL, see "[Migrating from REST](/graphql/guides/migrating-from-rest-to-graphql)."

{% endif %}

## Schema

{% ifversion fpt %}All API access is over HTTPS, and{% else %}The API is{% endif %} accessed from `{% data variables.product.api_url_code %}`.  All data is
sent and received as JSON.

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat/orgs

> HTTP/2 200
> Server: nginx
> Date: Fri, 12 Oct 2012 23:33:14 GMT
> Content-Type: application/json; charset=utf-8
> ETag: "a00049ba79152d03380c34652f2cb612"
> X-GitHub-Media-Type: github.v3
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4987
> X-RateLimit-Reset: 1350085394{% ifversion ghes %}
> X-GitHub-Enterprise-Version: {{ currentVersion | remove: "enterprise-server@" }}.0{% elsif ghae %}
> X-GitHub-Enterprise-Version: GitHub AE{% endif %}
> Content-Length: 5
> Cache-Control: max-age=0, private, must-revalidate
> X-Content-Type-Options: nosniff
```

Blank fields are included as `null` instead of being omitted.

All timestamps return in ISO 8601 format:

    YYYY-MM-DDTHH:MM:SSZ

For more information about timezones in timestamps, see [this section](#timezones).

### Summary representations

When you fetch a list of resources, the response includes a _subset_ of the
attributes for that resource. This is the "summary" representation of the
resource. (Some attributes are computationally expensive for the API to provide.
For performance reasons, the summary representation excludes those attributes.
To obtain those attributes, fetch the "detailed" representation.)

**Example**: When you get a list of repositories, you get the summary
representation of each repository. Here, we fetch the list of repositories owned
by the [octokit](https://github.com/octokit) organization:

    GET /orgs/octokit/repos

### Detailed representations

When you fetch an individual resource, the response typically includes _all_
attributes for that resource. This is the "detailed" representation of the
resource. (Note that authorization sometimes influences the amount of detail
included in the representation.)

**Example**: When you get an individual repository, you get the detailed
representation of the repository. Here, we fetch the
[octokit/octokit.rb](https://github.com/octokit/octokit.rb) repository:

    GET /repos/octokit/octokit.rb

The documentation provides an example response for each API method. The example
response illustrates all attributes that are returned by that method.

## Authentication

{% ifversion ghae %} We recommend authenticating to the {% data variables.product.product_name %} REST API by creating an OAuth2 token through the [web application flow](/developers/apps/authorizing-oauth-apps#web-application-flow). {% else %} There are two ways to authenticate through {% data variables.product.product_name %} REST API.{% endif %} Requests that require authentication will return `404 Not Found`, instead of `403 Forbidden`, in some places.  This is to prevent the accidental leakage of private repositories to unauthorized users.

### Basic authentication

```shell
$ curl -u "username" {% data variables.product.api_url_pre %}
```

### OAuth2 token (sent in a header)

```shell
$ curl -H "Authorization: token <em>OAUTH-TOKEN</em>" {% data variables.product.api_url_pre %}
```

{% note %}

Note: GitHub recommends sending OAuth tokens using the Authorization header.

{% endnote %}

Read [more about OAuth2](/apps/building-oauth-apps/).  Note that OAuth2 tokens can be acquired using the [web application flow](/developers/apps/authorizing-oauth-apps#web-application-flow) for production applications.

{% ifversion fpt or ghes %}
### OAuth2 key/secret

{% data reusables.apps.deprecating_auth_with_query_parameters %}

```shell
curl -u my_client_id:my_client_secret '{% data variables.product.api_url_pre %}/user/repos'
```

Using your `client_id` and `client_secret` does _not_ authenticate as a user, it will only identify your OAuth application to increase your rate limit. Permissions are only granted to users, not applications, and you will only get back data that an unauthenticated user would see. For this reason, you should only use the OAuth2 key/secret in server-to-server scenarios. Don't leak your OAuth application's client secret to your users.

You will be unable to authenticate using your OAuth2 key and secret while in private mode, and trying to authenticate will return `401 Unauthorized`. For more information, see "[Enabling private mode](/enterprise/admin/installation/enabling-private-mode)".
{% endif %}

{% ifversion fpt %}

Read [more about unauthenticated rate limiting](#increasing-the-unauthenticated-rate-limit-for-oauth-applications).

{% endif %}

### Failed login limit

Authenticating with invalid credentials will return `401 Unauthorized`:

```shell
$ curl -I {% data variables.product.api_url_pre %} -u foo:bar
> HTTP/2 401

> {
>   "message": "Bad credentials",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

After detecting several requests with invalid credentials within a short period,
the API will temporarily reject all authentication attempts for that user
(including ones with valid credentials) with `403 Forbidden`:

```shell
$ curl -i {% data variables.product.api_url_pre %} -u {% ifversion fpt or ghae %}
-u <em>valid_username</em>:<em>valid_token</em> {% endif %}{% ifversion ghes %}-u <em>valid_username</em>:<em>valid_password</em> {% endif %}
> HTTP/2 403
> {
>   "message": "Maximum number of login attempts exceeded. Please try again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

## Parameters

Many API methods take optional parameters. For `GET` requests, any parameters not
specified as a segment in the path can be passed as an HTTP query string
parameter:

```shell
$ curl -i "{% data variables.product.api_url_pre %}/repos/vmg/redcarpet/issues?state=closed"
```

In this example, the 'vmg' and 'redcarpet' values are provided for the `:owner`
and `:repo` parameters in the path while `:state` is passed in the query
string.

For `POST`, `PATCH`, `PUT`, and `DELETE` requests, parameters not included in the URL should be encoded as JSON
with a Content-Type of 'application/json':

```shell
$ curl -i -u username -d '{"scopes":["repo_deployment"]}' {% data variables.product.api_url_pre %}/authorizations
```

## Root endpoint

You can issue a `GET` request to the root endpoint to get all the endpoint categories that the REST API supports:

```shell
$ curl {% ifversion fpt or ghae %}
-u <em>username</em>:<em>token</em> {% endif %}{% ifversion ghes %}-u <em>username</em>:<em>password</em> {% endif %}{% data variables.product.api_url_pre %}
```

## GraphQL global node IDs

See the guide on "[Using Global Node IDs](/graphql/guides/using-global-node-ids)" for detailed information about how to find `node_id`s via the REST API and use them in GraphQL operations.

## Client errors

There are three possible types of client errors on API calls that
receive request bodies:

1. Sending invalid JSON will result in a `400 Bad Request` response.

        HTTP/2 400
        Content-Length: 35

        {"message":"Problems parsing JSON"}

2. Sending the wrong type of JSON values will result in a `400 Bad
   Request` response.

        HTTP/2 400
        Content-Length: 40

        {"message":"Body should be a JSON object"}

3. Sending invalid fields will result in a `422 Unprocessable Entity`
   response.

        HTTP/2 422
        Content-Length: 149

        {
          "message": "Validation Failed",
          "errors": [
            {
              "resource": "Issue",
              "field": "title",
              "code": "missing_field"
            }
          ]
        }

All error objects have resource and field properties so that your client
can tell what the problem is.  There's also an error code to let you
know what is wrong with the field.  These are the possible validation error
codes:

Error code name | Description
-----------|-----------|
`missing` | A resource does not exist.
`missing_field` | A required field on a resource has not been set.
`invalid` | The formatting of a field is invalid.  Review the documentation for more specific information.
`already_exists` | Another resource has the same value as this field.  This can happen in resources that must have some unique key (such as label names).
`unprocessable` | The inputs provided were invalid.

Resources may also send custom validation errors (where `code` is `custom`). Custom errors will always have a `message` field describing the error, and most errors will also include a `documentation_url` field pointing to some content that might help you resolve the error.

## HTTP redirects

API v3 uses HTTP redirection where appropriate. Clients should assume that any
request may result in a redirection. Receiving an HTTP redirection is *not* an
error and clients should follow that redirect. Redirect responses will have a
`Location` header field which contains the URI of the resource to which the
client should repeat the requests.

Status Code | Description
-----------|-----------|
`301` | Permanent redirection. The URI you used to make the request has been superseded by the one specified in the `Location` header field. This and all future requests to this resource should be directed to the new URI.
`302`, `307` | Temporary redirection. The request should be repeated verbatim to the URI specified in the `Location` header field but clients should continue to use the original URI for future requests.

Other redirection status codes may be used in accordance with the HTTP 1.1 spec.

## HTTP verbs

Where possible, API v3 strives to use appropriate HTTP verbs for each
action.

Verb | Description
-----|-----------
`HEAD` | Can be issued against any resource to get just the HTTP header info.
`GET` | Used for retrieving resources.
`POST` | Used for creating resources.
`PATCH` | Used for updating resources with partial JSON data. For instance, an Issue resource has `title` and `body` attributes. A `PATCH` request may accept one or more of the attributes to update the resource.
`PUT` | Used for replacing resources or collections. For `PUT` requests with no `body` attribute, be sure to set the `Content-Length` header to zero.
`DELETE` |Used for deleting resources.

## Hypermedia

All resources may have one or more `*_url` properties linking to other
resources.  These are meant to provide explicit URLs so that proper API clients
don't need to construct URLs on their own.  It is highly recommended that API
clients use these.  Doing so will make future upgrades of the API easier for
developers.  All URLs are expected to be proper [RFC 6570][rfc] URI templates.

You can then expand these templates using something like the [uri_template][uri]
gem:

    >> tmpl = URITemplate.new('/notifications{?since,all,participating}')
    >> tmpl.expand
    => "/notifications"

    >> tmpl.expand :all => 1
    => "/notifications?all=1"

    >> tmpl.expand :all => 1, :participating => 1
    => "/notifications?all=1&participating=1"

[rfc]: http://tools.ietf.org/html/rfc6570
[uri]: https://github.com/hannesg/uri_template

## Pagination

Requests that return multiple items will be paginated to 30 items by
default.  You can specify further pages with the `page` parameter. For some
resources, you can also set a custom page size up to 100 with the `per_page` parameter.
Note that for technical reasons not all endpoints respect the `per_page` parameter,
see [events](/rest/reference/activity#events) for example.

```shell
$ curl '{% data variables.product.api_url_pre %}/user/repos?page=2&per_page=100'
```

Note that page numbering is 1-based and that omitting the `page`
parameter will return the first page.

Some endpoints use cursor-based pagination. A cursor is a string that points to a location in the result set.
With cursor-based pagination, there is no fixed concept of "pages" in the result set, so you can't navigate to a specific page.
Instead, you can traverse the results by using the `before` or `after` parameters.

For more information on pagination, check out our guide on [Traversing with Pagination][pagination-guide].

### Link header

{% note %}

**Note:** It's important to form calls with Link header values instead of constructing your own URLs.

{% endnote %}

The [Link header](http://tools.ietf.org/html/rfc5988) includes pagination information. For example:

    Link: <{% data variables.product.api_url_code %}/user/repos?page=3&per_page=100>; rel="next",
      <{% data variables.product.api_url_code %}/user/repos?page=50&per_page=100>; rel="last"

_The example includes a line break for readability._

Or, if the endpoint uses cursor-based pagination:

    Link: <{% data variables.product.api_url_code %}/orgs/ORG/audit-log?after=MTYwMTkxOTU5NjQxM3xZbGI4VE5EZ1dvZTlla09uWjhoZFpR&before=>; rel="next",

This `Link` response header contains one or more [Hypermedia](/rest#hypermedia) link relations, some of which may require expansion as [URI templates](http://tools.ietf.org/html/rfc6570).

The possible `rel` values are:

Name | Description
-----------|-----------|
`next` |The link relation for the immediate next page of results.
`last` |The link relation for the last page of results.
`first` |The link relation for the first page of results.
`prev` |The link relation for the immediate previous page of results.

## Rate limiting

For API requests using Basic Authentication or OAuth, you can make up to 5,000 requests per hour. Authenticated requests are associated with the authenticated user, regardless of whether [Basic Authentication](#basic-authentication) or [an OAuth token](#oauth2-token-sent-in-a-header) was used. This means that all OAuth applications authorized by a user share the same quota of 5,000 requests per hour when they authenticate with different tokens owned by the same user.

{% ifversion fpt %}

For users that belong to a {% data variables.product.prodname_ghe_cloud %} account, requests made using an OAuth token to resources owned by the same {% data variables.product.prodname_ghe_cloud %} account have an increased limit of 15,000 requests per hour.

{% endif %}

When using the built-in `GITHUB_TOKEN` in GitHub Actions, the rate limit is 1,000 requests per hour per repository. For organizations that belong to a GitHub Enterprise Cloud account, this limit is 15,000 requests per hour per repository.

For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

{% data reusables.enterprise.rate_limit %}

Note that [the Search API has custom rate limit rules](/rest/reference/search#rate-limit).

The returned HTTP headers of any API request show your current rate limit status:

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> X-RateLimit-Limit: 60
> X-RateLimit-Remaining: 56
> X-RateLimit-Reset: 1372700873
```

Header Name | Description
-----------|-----------|
`X-RateLimit-Limit` | The maximum number of requests you're permitted to make per hour.
`X-RateLimit-Remaining` | The number of requests remaining in the current rate limit window.
`X-RateLimit-Reset` | The time at which the current rate limit window resets in [UTC epoch seconds](http://en.wikipedia.org/wiki/Unix_time).

If you need the time in a different format, any modern programming language can get the job done. For example, if you open up the console on your web browser, you can easily get the reset time as a JavaScript Date object.

``` javascript
new Date(1372700873 * 1000)
// => Mon Jul 01 2013 13:47:53 GMT-0400 (EDT)
```

If you exceed the rate limit, an error response returns:

```shell
> HTTP/2 403
> Date: Tue, 20 Aug 2013 14:50:41 GMT
> X-RateLimit-Limit: 60
> X-RateLimit-Remaining: 0
> X-RateLimit-Reset: 1377013266

> {
>    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
>    "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#rate-limiting"
> }
```

You can [check your rate limit status](/rest/reference/rate-limit) without incurring an API hit.

### Increasing the unauthenticated rate limit for OAuth applications

If your OAuth application needs to make unauthenticated calls with a higher rate limit, you can pass your app's client ID and secret before the endpoint route.

```shell
$ curl -u my_client_id:my_client_secret {% data variables.product.api_url_pre %}/user/repos
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4966
> X-RateLimit-Reset: 1372700873
```

{% note %}

**Note:** Never share your client secret with anyone or include it in client-side browser code. Use the method shown here only for server-to-server calls.

{% endnote %}

### Staying within the rate limit

If you exceed your rate limit using Basic Authentication or OAuth, you can likely fix the issue by caching API responses and using [conditional requests](#conditional-requests).

### Abuse rate limits

In order to provide quality service on {% data variables.product.product_name %}, additional rate limits may apply to some actions when using the API. For example, using the API to rapidly create content, poll aggressively instead of using webhooks, make multiple concurrent requests, or repeatedly request data that is computationally expensive may result in abuse rate limiting.

Abuse rate limits are not intended to interfere with legitimate use of the API. Your normal rate limits should be the only limit you target. To ensure you're acting as a good API citizen, check out our [Best Practices guidelines](/guides/best-practices-for-integrators/).

If your application triggers this rate limit, you'll receive an informative response:

```shell
> HTTP/2 403
> Content-Type: application/json; charset=utf-8
> Connection: close

> {
>   "message": "You have triggered an abuse detection mechanism and have been temporarily blocked from content creation. Please retry your request again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#abuse-rate-limits"
> }
```

{% ifversion fpt %}

## User agent required

All API requests MUST include a valid `User-Agent` header. Requests with no `User-Agent`
header will be rejected. We request that you use your {% data variables.product.product_name %} username, or the name of your
application, for the `User-Agent` header value. This allows us to contact you if there are problems.

Here's an example:

```shell
User-Agent: Awesome-Octocat-App
```

cURL sends a valid `User-Agent` header by default. If you provide an invalid `User-Agent` header via cURL (or via an alternative client), you will receive a `403 Forbidden` response:

```shell
$ curl -IH 'User-Agent: ' {% data variables.product.api_url_pre %}/meta
> HTTP/1.0 403 Forbidden
> Connection: close
> Content-Type: text/html

> Request forbidden by administrative rules.
> Please make sure your request has a User-Agent header.
> Check  for other possible causes.
```

{% endif %}

## Conditional requests

Most responses return an `ETag` header. Many responses also return a `Last-Modified` header. You can use the values
of these headers to make subsequent requests to those resources using the
`If-None-Match` and `If-Modified-Since` headers, respectively. If the resource
has not changed, the server will return a `304 Not Modified`.

{% ifversion fpt %}

{% tip %}

**Note**: Making a conditional request and receiving a 304 response does not
count against your [Rate Limit](#rate-limiting), so we encourage you to use it
whenever possible.

{% endtip %}

{% endif %}

```shell
$ curl -I {% data variables.product.api_url_pre %}/user
> HTTP/2 200
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4996
> X-RateLimit-Reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H 'If-None-Match: "644b5b0155e6404a9cc4bd9d8b1ae730"'
> HTTP/2 304
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4996
> X-RateLimit-Reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H "If-Modified-Since: Thu, 05 Jul 2012 15:31:30 GMT"
> HTTP/2 304
> Cache-Control: private, max-age=60
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4996
> X-RateLimit-Reset: 1372700873
```

## Cross origin resource sharing

The API supports Cross Origin Resource Sharing (CORS) for AJAX requests from
any origin.
You can read the [CORS W3C Recommendation](http://www.w3.org/TR/cors/), or
[this intro](https://code.google.com/archive/p/html5security/wikis/CrossOriginRequestSecurity.wiki) from the
HTML 5 Security Guide.

Here's a sample request sent from a browser hitting
`http://example.com`:

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com"
HTTP/2 302
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
```

This is what the CORS preflight request looks like:

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com" -X OPTIONS
HTTP/2 204
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With
Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
Access-Control-Max-Age: 86400
```

## JSON-P callbacks

You can send a `?callback` parameter to any GET call to have the results
wrapped in a JSON function.  This is typically used when browsers want
to embed {% data variables.product.product_name %} content in web pages by getting around cross domain
issues.  The response includes the same data output as the regular API,
plus the relevant HTTP Header information.

```shell
$ curl {% data variables.product.api_url_pre %}?callback=foo

> /**/foo({
>   "meta": {
>     "status": 200,
>     "X-RateLimit-Limit": "5000",
>     "X-RateLimit-Remaining": "4966",
>     "X-RateLimit-Reset": "1372700873",
>     "Link": [ // pagination headers and other links
>       ["{% data variables.product.api_url_pre %}?page=2", {"rel": "next"}]
>     ]
>   },
>   "data": {
>     // the data
>   }
> })
```

You can write a JavaScript handler to process the callback. Here's a minimal example you can try out:

    <html>
    <head>
    <script type="text/javascript">
    function foo(response) {
      var meta = response.meta;
      var data = response.data;
      console.log(meta);
      console.log(data);
    }

    var script = document.createElement('script');
    script.src = '{% data variables.product.api_url_code %}?callback=foo';

    document.getElementsByTagName('head')[0].appendChild(script);
    </script>
    </head>

    <body>
      <p>Open up your browser's console.</p>
    </body>
    </html>

All of the headers are the same String value as the HTTP Headers with one
notable exception: Link.  Link headers are pre-parsed for you and come
through as an array of `[url, options]` tuples.

A link that looks like this:

    Link: <url1>; rel="next", <url2>; rel="foo"; bar="baz"

... will look like this in the Callback output:

```json
{
  "Link": [
    [
      "url1",
      {
        "rel": "next"
      }
    ],
    [
      "url2",
      {
        "rel": "foo",
        "bar": "baz"
      }
    ]
  ]
}
```

## Timezones

Some requests that create new data, such as creating a new commit, allow you to provide time zone information when specifying or generating timestamps. We apply the following rules, in order of priority, to determine timezone information for API calls.

* [Explicitly providing an ISO 8601 timestamp with timezone information](#explicitly-providing-an-iso-8601-timestamp-with-timezone-information)
* [Using the `Time-Zone` header](#using-the-time-zone-header)
* [Using the last known timezone for the user](#using-the-last-known-timezone-for-the-user)
* [Defaulting to UTC without other timezone information](#defaulting-to-utc-without-other-timezone-information)

### Explicitly providing an ISO 8601 timestamp with timezone information

For API calls that allow for a timestamp to be specified, we use that exact timestamp. An example of this is the [Commits API](/rest/reference/git#commits).

These timestamps look something like `2014-02-27T15:05:06+01:00`. Also see [this example](/rest/reference/git#example-input) for how these timestamps can be specified.

### Using the `Time-Zone` header

It is possible to supply a `Time-Zone` header which defines a timezone according to the [list of names from the Olson database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```shell
$ curl -H "Time-Zone: Europe/Amsterdam" -X POST {% data variables.product.api_url_pre %}/repos/github/linguist/contents/new_file.md
```

This means that we generate a timestamp for the moment your API call is made in the timezone this header defines. For example, the [Contents API](/rest/reference/repos#contents) generates a git commit for each addition or change and uses the current time as the timestamp. This header will determine the timezone used for generating that current timestamp.

### Using the last known timezone for the user

If no `Time-Zone` header is specified and you make an authenticated call to the API, we use the last known timezone for the authenticated user. The last known timezone is updated whenever you browse the {% data variables.product.product_name %} website.

### Defaulting to UTC without other timezone information

If the steps above don't result in any information, we use UTC as the timezone to create the git commit.

[pagination-guide]: /guides/traversing-with-pagination
