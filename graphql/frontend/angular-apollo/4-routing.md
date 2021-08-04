In this section, you’ll learn how to use the [`Angular Router`](https://angular.io/guide/router) with Apollo to implement some navigation functionality!

### Install Dependencies

The Angular Router is an optional service that is already installed thanks to `angular-cli`.

### Create a Header

Before you’re moving on to configure the different routes for your application, you need to create a `Header` component that users can use to navigate between the various parts of your app.

Go ahead and run `ng generate component header` and this create `header.component.ts` , `header.component.spec.ts`, `header.component.html`, `header.component.css` in `src/app/header` folder and add the following code in `header.component.ts`:

    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'hn-header',
      templateUrl: './header.component.html',
      styleUrls: ['./header.component.css']
    })
    export class HeaderComponent implements OnInit {

      constructor() { }

      ngOnInit() {
      }

    }

Then, add the following code in `header.component.html`:

    <div class='flex pa1 justify-between nowrap orange'>
      <div class='flex flex-fixed black'>
        <div class='fw7 mr1'>Hacker News</div>
        <a [routerLink]="['/']" class='ml1 no-underline black'>new</a>
        <div class='ml1'>|</div>
        <a [routerLink]="['/create']" class='ml1 no-underline black'>submit</a>
      </div>
    </div>

This renders merely two `router-link` that users can use to navigate between the `LinkListComponent` and the `CreateLinkComponent` components.

### Setup routes

You’ll configure the different routes for the app in `src/app/app.routing.ts`.

Open the corresponding file `src/app/app.routing.ts` and update the code to match the following:

    import {NgModule} from '@angular/core';
    import {RouterModule, Routes} from '@angular/router';

    // 1
    import {LinkListComponent} from './link-list/link-list.component';
    import {CreateLinkComponent} from './create-link/create-link.component';

    /**
     * Setup all routes here
     */
    const routes: Routes = [
      // 2
      {
        path: '',
        component: LinkListComponent,
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: CreateLinkComponent,
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '',
      }
    ];

    @NgModule({
      imports: [
        // 3
        RouterModule.forRoot(routes)
      ],
      exports: [RouterModule]
    })
    export class AppRoutingModule {
    }

Let’s take a closer look to understand better what’s going on:

1.  Here you import the `CreateLinkComponent` and `LinkListComponent` components which will be rendered for different routes
2.  Here you map each route to the component that should be rendered
3.  Here you configure the angular router

You now need to make some small updates to `src/app/app.module.ts`.

Open up `src/app/app.module.ts` and add the following import:

    import {AppRoutingModule} from './app.routing';

Still in `src/app/app.module.ts`, import `AppRoutingModule` to the `AppModule`:

    // ...
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        GraphQLModule
      ],
      providers: [],
      // ...

You need to update one more file, `src/app/app.component.html`.

In `src/app/app.component.html` update your template to the following (`router-outlet` is where the component for the current route will be rendered):

    <div class="center w85">
      <hn-header></hn-header>
      <div class='ph3 pv1 background-gray'>
        <router-outlet></router-outlet>
      </div>
    </div>

That’s it. You can now access two URLs: `http://localhost:4200/` will render `LinkListComponent` and `http://localhost:4200/create` will render the `CreateLinkComponent` component you just wrote in the previous section.

![Access the LinkListComponent at localhost:4200](https://imgur.com/KBoxhjP.gif)

### Implement navigation

To wrap up this section, you need to implement an automatic redirect from `CreateLinkComponent` to `LinkListComponent` after a mutation is performed.

Open `src/app/create-link/create-link.component.ts` and update the `createLink` method to look like the following:

    // ...
    createLink() {
        this.apollo.mutate<CreateLinkMutationResponse>({
          mutation: CREATE_LINK_MUTATION,
          variables: {
            description: this.description,
            url: this.url
          },
          update: (store, { data: { createLink } }) => {
            const data: any = store.readQuery({
              query: ALL_LINKS_QUERY
            });

            data.allLinks.push(createLink);
            store.writeQuery({ query: ALL_LINKS_QUERY, data })
          },
        }).subscribe((response) => {
          // We injected the Router service
          this.router.navigate(['/']);
        });
      }
    // ...

Then import `Router` and update the `constructor` method to look like the following:

    // ...
    import {Router} from '@angular/router';

    export class CreateLinkComponent implements OnInit {
      description = '';
      url = '';

      constructor(
        public apollo: Apollo,
        public router: Router,
      ) {
      }
    // ...

After the mutation is performed, the angular router (`Router` service) will now navigate back to the `LinkListComponent` component that’s accessible on the root route: `/`.
