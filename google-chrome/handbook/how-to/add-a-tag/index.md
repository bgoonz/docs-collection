2021-01-11

Add the tag to the list of supported tags
-----------------------------------------

-   Add your tag to `site/_data/i18n/tags.yml`. The `en` and `es` fields correspond to different languages. For now, just add your tag using the `en` field.

    news:
      en: News

Add the tag to your post
------------------------

In the front matter for your post you can add a list of tags:

    ---
    title: My first post
    tags:
      - news
      - feature-policy
      - encryption
    ---
