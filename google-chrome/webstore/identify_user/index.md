2017-08-30

This page tells you how to get the Google Account identity of a user, using Google’s OpenID endpoint. You can use this identity to manage user payments and licensing, or if you need a login system. Google Accounts can help you provide a better user experience, since users of the Chrome Web Store are likely to be logged in already, and they won’t have to set up and remember yet another username and password.

When to support Google Accounts
-------------------------------

The following table summarizes when you should support Google Account logins using OpenID.

<table><thead><tr class="header"><th>App cost</th><th>Payment plan/system</th><th>Support for Google Accounts (using OpenID)</th></tr></thead><tbody><tr class="odd"><td>Paid</td><td>Custom payment solution</td><td><strong>Recommended</strong><br />
Users from the Chrome Web Store will have a better experience if you support the Google Account that they’re already logged into.</td></tr><tr class="even"><td>Free</td><td>You <strong>might charge</strong> for the app in the future</td><td><strong>Recommended</strong><br />
Supporting Google Accounts might make adding payments simpler.</td></tr><tr class="odd"><td>Free</td><td><strong>No plans to charge</strong> for the app in the future</td><td><strong>Optional</strong><br />
If you want to identify individual users, Google Accounts are a reasonable way to do so.</td></tr></tbody></table>

How to use OpenID with Google Accounts
--------------------------------------

To get the user’s OpenID URL, you query Google’s OpenID service. If the user isn’t already logged in, the user will be prompted to sign in with a Google-provided login page or popup.

**Note**: The OpenID URL is unique for a specific Google Account *and a specific app*. If you publish multiple apps, the same user will have a different OpenID URL for each app.

Here’s what the login page looks like. Note that it has a Google URL, not a URL from the app’s site:

{% Img src=“image/BrQidfK9jaQyIHwdw91aVpkPiib2/yDxgjzMfnbRFJi9XlGyj.png”, alt=“The Google login page.”, height=“368”, width=“644” %}

You can get the Google OpenID endpoint by sending a request to `https://www.google.com/accounts/o8/id`. See [Federated Login for Google Account Users](https://developers.google.com/accounts/docs/OpenID) for details.
