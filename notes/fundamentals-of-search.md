[Giving you fresher, more recent search
results](https://search.googleblog.com/2011/11/giving-you-fresher-more-recent-search.html "Giving you fresher, more
recent search results")

---

November 3, 2011

_(Cross-posted on the [Official Google
Blog](http://googleblog.blogspot.com/2011/11/giving-you-fresher-more-recent-search.html))_

Search results, like warm cookies right out of the oven or cool refreshing fruit on a hot summer's day, are best when
they're fresh. Even if you don't specify it in your search, you probably want search results that are relevant and
recent.

If I search for [[olympics](https://www.google.com/search?q=olympics)], I probably want information about next summer's
upcoming Olympics, not the 1900 Summer Olympics (the only time my favorite sport, [cricket, was
played](http://en.wikipedia.org/wiki/Cricket_at_the_1900_Summer_Olympics)). Google Search uses a freshness algorithm,
designed to give you the most up-to-date results, so even when I just type
[[olympics](https://www.google.com/search?q=olympics)] without specifying 2012, I still find what I'm looking for.

Given the incredibly fast pace at which information moves in today's world, the most recent information can be from the
last week, day or even minute, and depending on the search terms, the algorithm needs to be able to figure out if a
result from a week ago about a TV show is recent, or if a result from a week ago about breaking news is too old.

We completed our [Caffeine web indexing
system](http://googleblog.blogspot.com/2010/06/our-new-search-index-caffeine.html) last year, which allows us to crawl
and index the web for fresh content quickly on an enormous scale. Building upon the momentum from Caffeine, today we're
making a significant improvement to our ranking algorithm that impacts roughly 35 percent of searches and better
determines when to give you more up-to-date relevant results for these varying degrees of freshness.

- Recent events or hot topics. For recent events or hot topics that begin trending on the web, you want to find the
  latest information immediately. Now when you search for current events like [[occupy oakland
  protest](https://www.google.com/search?q=occupy+oakland+protest)], or for the latest news about the [[nba
  lockout](https://www.google.com/search?q=nba+lockout)], you'll see more high-quality pages that might only be minutes
  old.

[![](https://2.bp.blogspot.com/-dhIJHmQ_7A0/TrKuSozc2HI/AAAAAAAAAHo/2f7JBSICwak/s400/freshness_blog.png)](https://2.bp.blogspot.com/-dhIJHmQ_7A0/TrKuSozc2HI/AAAAAAAAAHo/2f7JBSICwak/s1600/freshness_blog.png)

- Regularly recurring events. Some events take place on a regularly recurring basis, such as annual conferences like
  [[ICALP](https://www.google.com/search?q=icalp)] or an event like the [[presidential
  election](https://www.google.com/search?q=presidential+election)]. Without specifying with your keywords, it's implied
  that you expect to see the most recent event, and not one from 50 years ago. There are also things that recur more
  frequently, so now when you're searching for the latest [[NFL scores](https://www.google.com/search?q=NFL+scores)],
  [[dancing with the stars](https://www.google.com/search?q=dancing+with+the+stars)] results or [[exxon
  earnings](https://www.google.com/search?q=exxon+earnings)], you'll see the latest information.

- Frequent updates. There are also searches for information that changes often, but isn't really a hot topic or a
  recurring event. For example, if you're researching the [[best slr
  cameras](https://www.google.com/search?q=best+slr+cameras)], or you're in the market for a new car and want [[subaru
  impreza reviews](https://www.google.com/search?q=subaru+impreza+reviews)], you probably want the most up to date
  information.

There are plenty of cases where results that are a few years old might still be useful for you. [[fast tomato sauce
recipe](https://www.google.com/search?q=fast+tomato+sauce+recipe)] certainly saved me after a call from my wife reminded
me I had volunteered to make dinner! On the other hand, when I search for the [[49ers
score](https://www.google.com/search?q=49ers+score)], a result that is a week old might be too old.

Different searches have different freshness needs. This algorithmic improvement is designed to better understand how to
differentiate between these kinds of searches and the level of freshness you need, and make sure you get the most up to
the minute answers.

*Update 11/7/11: *To clarify, when we say this algorithm impacted 35% of searches, we mean at least one result on the
page was affected, as opposed to when we've said *noticeably* impacted in the past, which means changes that are
significant enough that an average user would notice. Using that same scale, this change *noticeably* impacts 6 - 10% of
searches, depending on the language and domain you're searching on.

# How Search organizes information

Before you search, web crawlers gather information from across hundreds of billions of webpages and organize it in the
Search index.

## The fundamentals of Search

The crawling process begins with a list of web addresses from past crawls
and [sitemaps](https://support.google.com/webmasters/answer/156184?hl=en) provided by website owners. As our crawlers
visit these websites, they use links on those sites to discover other pages. The software pays special attention to new
sites, changes to existing sites and dead links. Computer programs determine which sites to crawl, how often and how
many pages to fetch from each site.

We offer [Search Console](https://support.google.com/webmasters/answer/9128668?hl=en) to give site owners granular
choices about how Google crawls their site: they can provide detailed instructions about how to process pages on their
sites, can [request a recrawl](https://support.google.com/webmasters/answer/6065812?hl=en) or can opt out of crawling
altogether using a file called "[robots.txt](https://developers.google.com/search/docs/advanced/robots/intro)". Google
never accepts payment to crawl a site more frequently --- we provide the same tools to all websites to ensure the best
possible results for our users.

## Finding information by crawling

The web is like an ever-growing library with billions of books and no central filing system. We use software known as
web crawlers to discover publicly available webpages. Crawlers look at webpages and follow links on those pages, much
like you would if you were browsing content on the web. They go from link to link and bring data about those webpages
back to Google's servers.

## Organizing information by indexing

When crawlers find a webpage, our systems render the content of the page, just as a browser does. We take note of key
signals --- from keywords to website freshness --- and we keep track of it all in the Search index.

The Google Search index contains hundreds of billions of webpages and is well over 100,000,000 gigabytes in size. It's
like the index in the back of a book --- with an entry for every word seen on every webpage we index. When we index a
webpage, we add it to the entries for all of the words it contains.

With the Knowledge Graph, we're continuing to go beyond keyword matching to better understand the people, places and
things you care about. To do this, we not only organize information about webpages but other types of information too.
Today, Google Search can help you search text from [millions of books from major
libraries](https://www.google.com/intl/en/googlebooks/about/index.html), find travel times from your [local public
transit agency](http://maps.google.com/help/maps/mapcontent/transit/), or help you navigate data from public sources
like the [World Bank](https://data.worldbank.org/).

# How Search algorithms work

With the amount of information available on the web, finding what you need would be nearly impossible without some help
sorting through it. Google ranking systems are designed to do just that: sort through hundreds of billions of webpages
in our Search index to find the most relevant, useful results in a fraction of a second, and present them in a way that
helps you find what you're looking for.

These ranking systems are made up of not one, but a whole series of algorithms. To give you the most useful information,
Search algorithms look at many factors, including the words of your query, relevance and usability of pages, expertise
of sources, and your location and settings. The weight applied to each factor varies depending on the nature of your
query---for example, the freshness of the content plays a bigger role in answering queries about current news topics
than it does about dictionary definitions.

To help ensure Search algorithms meet high standards of relevance and quality, we have a [rigorous
process](https://www.google.com/search/howsearchworks/mission/users/) that involves both live tests and thousands of
trained external Search Quality Raters from around the world. These Quality Raters follow
strict [guidelines](https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf) that define our goals for
Search algorithms and are publicly available for anyone to see.

---

# Meaning of your query

## Meaning of your query

To return relevant results for your query, we first need to establish what information you're looking for ー the intent behind your query. Understanding intent is fundamentally about understanding language, and is a critical aspect of Search. We build language models to try to decipher what strings of words we should look up in the index.

This involves steps as seemingly simple as interpreting spelling mistakes, and extends to trying to understand the type of query you've entered by applying some of the latest research on natural language understanding. For example, our synonym system helps Search know what you mean by establishing that multiple words mean the same thing. This capability allows Search to match the query "How to change a lightbulb" with pages describing how to replace a lightbulb. This system took over five years to develop and significantly improves results in over 30% of searches across languages.

Beyond synonyms, Search algorithms also try to understand what category of information you are looking for. Is it a very specific search or a broad query? Are there words such as "review" or "pictures" or "opening hours" that indicate a specific information need behind the search? Is the query written in French, suggesting that you want answers in that language? Or are you searching for a nearby business and want local info?

A particularly important dimension of this query categorization is our analysis of whether your query is seeking out fresh content. If you search for trending keywords, our [freshness algorithms](https://search.googleblog.com/2011/11/giving-you-fresher-more-recent-search.html) will interpret that as a signal that up-to-date information might be more useful than older pages. This means that when you're searching for the latest "NFL scores", "dancing with the stars" results or "exxon earnings", you'll see the latest information.

---

# Relevance of webpages

## Relevance of webpages

Next, algorithms analyze the content of webpages to assess whether the page contains information that might be relevant to what you are looking for.

The most basic signal that information is relevant is when a webpage contains the same keywords as your search query. If those keywords appear on the page, or if they appear in the headings or body of the text, the information is more likely to be relevant. Beyond simple keyword matching, we use aggregated and anonymized interaction data to assess whether search results are relevant to queries. We transform that data into signals that help our machine-learned systems better estimate relevance.

These relevance signals help Search algorithms assess whether a webpage contains an answer to your search query, rather than just repeating the same question. Just think: when you search for "dogs", you likely don't want a page with the word "dogs" on it hundreds of times. With that in mind, algorithms assess if a page contains other relevant content beyond the keyword "dogs" --- such as pictures of dogs, videos, or even a list of breeds.

It's important to note that, while our systems do look for these kind of quantifiable signals to assess relevance, they are not designed to analyze subjective concepts such as the viewpoint or political leaning of a page's content.

---

# Quality of content

Quality of content
Beyond matching the words in your query with relevant documents on the web, Search algorithms also aim to prioritize the most reliable sources available. To do this, our systems are designed to identify signals that can help determine which pages demonstrate expertise, authoritativeness, and trustworthiness on a given topic.

We look for sites that many users seem to value for similar queries. For example, if other prominent websites link to the page (what is known as PageRank), that has proven to be a good sign that the information is well trusted. Aggregated feedback from our Search quality evaluation process is used to further refine how our systems discern the quality of information.

Quality of content
Spam algorithms play an important role in establishing whether a page is low-quality and help Search ensure that sites don’t rise in search results through deceptive or manipulative behavior. Google’s webmaster guidelines outline the techniques that characterize such low-quality spam sites, including buying links that pass PageRank or sneaking invisible text onto the page.

Content on the web and the broader information ecosystem is constantly changing, and we continuously measure and assess the quality of our systems to ensure that we’re achieving the right balance of information relevance and authoritativeness to maintain your trust in the results you see.

---

# Usability of webpages

Usability of webpages
When ranking results, Google Search also evaluates whether webpages are easy to use. When we identify persistent user pain points, we develop algorithms to promote more usable pages over less usable ones, all other things being equal.

These algorithms analyze signals that indicate whether all our users are able to view the result, like whether the site appears correctly in different browsers; whether it is designed for all device types and sizes, including desktops, tablets, and smartphones; and whether the page loading times work well for users with slow Internet connections.

Since website owners can improve the usability of their site, we work hard to inform site owners in advance of significant, actionable changes to our Search algorithms. For example, in January 2018 we announced that our algorithms would begin to consider the “page speed” of sites, six months before the changes went live. To aid website owners, we provided detailed guidance and tools like PageSpeed Insights and Webpagetest.org so site owners could see what (if anything) they needed to adjust to make their sites more mobile friendly.

You can find more information on the tools and tips Google provides to site owners here .

Returning the best results

---

# Context and settings

Information such as your location, past Search history and Search settings all help us to tailor your results to what is most useful and relevant for you in that moment.

We use your country and location to deliver content relevant for your area. For instance, if you’re in Chicago and you search “football”, Google will most likely show you results about American football and the Chicago Bears first. Whereas if you search “football” in London, Google will rank results about soccer and the Premier League higher. Search settings are also an important indicator of which results you’re likely to find useful, such as if you set a preferred language or opted in to SafeSearch (a tool that helps filter out explicit results).

Context and settings
In some instances, we may also personalize your results using information about your recent Search activity. For instance, if you search for “Barcelona” and recently searched for “Barcelona vs Arsenal”, that could be an important clue that you want information about the football club, not the city.

Search also includes some features that personalize results based on the activity in your Google account. For example, if you search for “events near me” Google may tailor some recommendations to event categories we think you may be interested in. These systems are designed to match your interests, but they are not designed to infer sensitive characteristics like your race, religion, or political party.

You can control what Search activity is used to improve your Search experience, including adjusting what data is saved to your Google account, at myaccount.google.com. To disable Search personalization based on activity in your account, turn off Web & App Activity.

---

# Overview of Google crawlers (user agents)

"Crawler" is a generic term for any program (such as a robot or spider) that is used to automatically discover and scan websites by following links from one webpage to another. Google's main crawler is called [Googlebot](https://developers.google.com/search/docs/advanced/crawling/googlebot). This table lists information about the common Google crawlers you may see in your referrer logs, and how to specify them in [robots.txt](https://developers.google.com/search/docs/advanced/robots/intro), the [robots meta tags](https://developers.google.com/search/docs/advanced/crawling/special-tags), and the [`X-Robots-Tag` HTTP directives](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#xrobotstag).

The following table shows the crawlers used by various products and services at Google:

- User agent token is used in the `User-agent:` line in robots.txt to match a crawler type when writing crawl rules for your site. Some crawlers have more than one token, as shown in the table; you need to match only one crawler token for a rule to apply. This list is not complete, but covers most of the crawlers you might see on your website.
- Full user agent string is a full description of the crawler, and appears in the request and your web logs.

  These values can be spoofed. If you need to verify that the visitor is Googlebot, [use reverse DNS lookup](https://developers.google.com/search/docs/advanced/crawling/verifying-googlebot).

|

## Crawlers

|
|

### [APIs-Google](https://developers.google.com/search/docs/advanced/crawling/apis-user-agent)

|

| User agent token | `APIs-Google` |
| Full user agent string | `APIs-Google (+https://developers.google.com/webmasters/APIs-Google.html)` |

|
|

### [AdSense](https://support.google.com/adsense/answer/99376)

|

| User agent token | `Mediapartners-Google` |
| Full user agent string | `Mediapartners-Google` |

|
|

### AdsBot Mobile Web Android

|

Checks Android [web page ad quality](https://support.google.com/google-ads/answer/2404197).

| User agent token | `AdsBot-Google-Mobile` |
| Full user agent string | `Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)` |

|
|

### AdsBot Mobile Web

|

Checks iPhone [web page ad quality](https://support.google.com/google-ads/answer/2404197).

| User agent token | `AdsBot-Google-Mobile` |
| Full user agent string | `Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)` |

|
|

### AdsBot

|

Checks desktop [web page ad quality](https://support.google.com/google-ads/answer/2404197).

| User agent token | `AdsBot-Google` |
| Full user agent string | `AdsBot-Google (+http://www.google.com/adsbot.html)` |

|
|

### Googlebot Image

|

| User agent tokens |

- `Googlebot-Image`
- `Googlebot`

|
| Full user agent string | `Googlebot-Image/1.0` |

|
|

### Googlebot News

|

| User agent tokens |

- `Googlebot-News`
- `Googlebot`

|
| Full user agent string | `Googlebot-News` |

|
|

### [Googlebot](https://developers.google.com/search/docs/advanced/crawling/googlebot) Video

|

| User agent tokens |

- `Googlebot-Video`
- `Googlebot`

|
| Full user agent string | `Googlebot-Video/1.0` |

|
|

### [Googlebot](https://developers.google.com/search/docs/advanced/crawling/googlebot) Desktop

|

| User agent token | `Googlebot` |
| Full user agent strings |

- `Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)`
- `Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) [Chrome/*W.X.Y.Z*](https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers?hl=en&visit_id=1628165898499-4461129763991955118&rd=1#user_agent_version) Safari/537.36`

- `Googlebot/2.1 (+http://www.google.com/bot.html)`

|

|
|

### [Googlebot](https://developers.google.com/search/docs/advanced/crawling/googlebot) Smartphone

|

| User agent token | `Googlebot` |
| Full user agent string | `Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) [Chrome/*W.X.Y.Z*](https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers?hl=en&visit_id=1628165898499-4461129763991955118&rd=1#user_agent_version) Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)` |

|
|

### [Mobile AdSense](https://support.google.com/adsense/answer/99376)

|

| User agent token | `Mediapartners-Google` |
| Full user agent string | `*(Various mobile device types)* (compatible; Mediapartners-Google/2.1; +http://www.google.com/bot.html)` |

|
|

### Mobile Apps Android

|

Checks Android app page [ad quality](https://support.google.com/google-ads/answer/2404197). Obeys [`AdsBot-Google`](https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers?hl=en&visit_id=1628165898499-4461129763991955118&rd=1#adsbot) robots rules.

| User agent token | `AdsBot-Google-Mobile-Apps` |
| Full user agent string | `AdsBot-Google-Mobile-Apps` |

|
|

### [Feedfetcher](https://developers.google.com/search/docs/advanced/crawling/feedfetcher)

|

Feedfetcher doesn't respect robots.txt rules. [Here's why](https://developers.google.com/search/docs/advanced/crawling/feedfetcher#robots).

| User agent token | `FeedFetcher-Google` |
| Full user agent string | `FeedFetcher-Google; (+http://www.google.com/feedfetcher.html)` |

|
|

### [Google Read Aloud](https://developers.google.com/search/docs/advanced/crawling/read-aloud-user-agent)

|

Google Read Aloud doesn't respect robots.txt rules. [Here's why](https://developers.google.com/search/docs/advanced/crawling/read-aloud-user-agent#robots).

| User agent token | `Google-Read-Aloud` |
| Full user agent strings |

Current agents:

- Desktop agent:\
  `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36 (compatible; Google-Read-Aloud; +https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers)`
- Mobile agent:\
  `Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36 (compatible; Google-Read-Aloud; +https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers)`

Former agent (_deprecated_):

`google-speakr`

|

|
|

### [Duplex on the web](https://developers.google.com/search/docs/advanced/crawling/duplex-user-agent)

|

Duplex on the web may ignore the `*` wildcard. [Here's why](https://developers.google.com/search/docs/advanced/crawling/dupex-user-agent#control-crawling).

| User agent token | `DuplexWeb-Google` |
| Full user agent string | `Mozilla/5.0 (Linux; Android 11; Pixel 2; DuplexWeb-Google/1.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Mobile Safari/537.36` |

|
|

### [Google Favicon](https://developers.google.com/search/docs/advanced/appearance/favicon-in-search)

|

For user-initiated requests, Google Favicon ignores robots.txt rules.

| User agent token | `Google Favicon` |
| Full user agent string | `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.75 Safari/537.36 Google Favicon` |

|
|

### [Web Light](https://developers.google.com/search/docs/advanced/mobile/web-light)

|

Web Light doesn't respect robots.txt rules. [Here's why](https://developers.google.com/search/docs/advanced/mobile/web-light#robots).

| User agent token | `googleweblight` |
| Full user agent string | `Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko; googleweblight) Chrome/38.0.1025.166 Mobile Safari/535.19` |

|
|

### Google StoreBot

|

| User agent token | `Storebot-Google` |
| Full user agent strings |

- Desktop agent:

  `Mozilla/5.0 (X11; Linux x86_64; Storebot-Google/1.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36`

- Mobile agent:

  `Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012; Storebot-Google/1.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36`

|

|

Chrome/*W.X.Y.Z* in user agents

Wherever you see the string Chrome/*W.X.Y.Z* in the user agent strings in the table, *W.X.Y.Z* is actually a placeholder that represents the version of the Chrome browser used by that user agent: for example, `41.0.2272.96`. This version number will increase over time to [match the latest Chromium release version used by Googlebot](https://developers.google.com/search/blog/2019/05/the-new-evergreen-googlebot).

If you are searching your logs or filtering your server for a user agent with this pattern, use wildcards for the version number rather than specifying an exact version number.

## User agents in robots.txt

Where several user agents are recognized in the robots.txt file, Google will follow the most specific. If you want all of Google to be able to crawl your pages, you don't need a robots.txt file at all. If you want to block or allow all of Google's crawlers from accessing some of your content, you can do this by specifying Googlebot as the user agent. For example, if you want all your pages to appear in Google Search, and if you want AdSense ads to appear on your pages, you don't need a robots.txt file. Similarly, if you want to block some pages from Google altogether, blocking the `Googlebot` user agent will also block all Google's other user agents.

But if you want more fine-grained control, you can get more specific. For example, you might want all your pages to appear in Google Search, but you don't want images in your personal directory to be crawled. In this case, use robots.txt to disallow the `Googlebot-Image` user agent from crawling the files in your personal directory (while allowing Googlebot to crawl all files), like this:

User-agent: Googlebot
Disallow:

User-agent: Googlebot-Image
Disallow: /personal

To take another example, say that you want ads on all your pages, but you don't want those pages to appear in Google Search. Here, you'd block Googlebot, but allow the `Mediapartners-Google` user agent, like this:

User-agent: Googlebot
Disallow: /

User-agent: Mediapartners-Google
Disallow:

## User agents in robots meta tags

Some pages use multiple robots meta tags to specify directives for different crawlers, like this:

<meta name="robots" content="nofollow">
<meta name="googlebot" content="noindex">

In this case, Google will use the sum of the negative directives, and Googlebot will follow both the `noindex` and `nofollow` directives. [More detailed information about controlling how Google crawls and indexes your site.](https://developers.google.com/search/docs/advanced/crawling/overview)
