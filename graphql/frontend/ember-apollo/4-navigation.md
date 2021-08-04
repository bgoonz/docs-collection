In this section, you’ll implement some navigation functionality.

### Create a Header

First, you need to create a `site-header` component that users can use to navigate between the different routes of your application.

    ember generate component site-header

Replace the contents of the `site-header` handlebars template with the following:

    <div class='flex pa1 justify-between nowrap orange'>
      <div class='flex flex-fixed black'>
        <div class='fw7 mr1'>Hacker News</div>
        {{#link-to 'links' class='ml1 no-underline black'}}new{{/link-to}}
        <div class='ml1'>|</div>
        {{#link-to 'create' class='ml1 no-underline black'}}submit{{/link-to}}
      </div>
    </div>

Inside of your `application.hbs` template, add your `site-header` component and some other structure:

    <div class='center w85'>
      {{site-header}}
      <div class='ph3 pv1 background-gray'>
        {{outlet}}
      </div>
    </div>

This simply renders two links that users can use to navigate between the `/links` route and the `/create` route.

That’s it. If you run `yarn start`, you can now access two URLs. `http://localhost:4200/` will render all links and `http://localhost:4200/create` renders the form to add a link component you just wrote in the previous section.

![Run yarn start to see the app at localhost:4200](http://i.imgur.com/zxf1Dfv.png)

You’ve already integrated the redirect after creating a new link, so this section is super simple, but necessary!
