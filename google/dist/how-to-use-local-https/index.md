<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/ZvW6VM0GEScldWHBvXJ4.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#how-to-use-https-for-local-development" class="w-toc__header--link">How to use HTTPS for local development</a>

- [Running your site locally with HTTPS using mkcert (recommended)](<#running-your-site-locally-with-https-using-mkcert-(recommended)>)
- [Caution](#caution)
- [Setup](#setup)
- [Using mkcert: cheatsheet](#using-mkcert:-cheatsheet)
- [Running your site locally with HTTPS: other options](#running-your-site-locally-with-https:-other-options)
- [Self-signed certificate](#self-signed-certificate)
- [Certificate signed by a regular certificate authority](#certificate-signed-by-a-regular-certificate-authority)
- [Reverse proxy](#reverse-proxy)
- [Flag (not recommended)](<#flag-(not-recommended)>)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# How to use HTTPS for local development

Sometimes, you need to run your local development site with HTTPS. Tools and tips to do this safely and quickly.

Jan 25, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/secure" class="w-post-signpost__link">Safe and secure</a>

[<img src="https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Maud Nalpas" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/maudn/)

<a href="/authors/maudn/" class="w-author__name-link">Maud Nalpas</a>

- <a href="https://twitter.com/maudnals" class="w-author__link">Twitter</a>
- <a href="https://github.com/maudnals" class="w-author__link">GitHub</a>

Most of the time, `http://localhost` does what you need: in browsers, it mostly behaves like HTTPS 🔒. That's why some APIs that won't work on a deployed HTTP site, will work on `http://localhost`.

What this means is that you need to use HTTPS locally **only in special cases** (see [When to use HTTPS for local development](/when-to-use-local-https)), like custom hostnames or Secure cookies across browsers. Keep reading if that's you!

_In this post, statements about `localhost` are valid for `127.0.0.1` and `[::1]` as well, since they both describe the local computer address, also called "loopback address". Also, to keep things simple, the port number isn't specified._ _So when you see `http://localhost`, read it as `http://localhost:{PORT}` or `http://127.0.0.1:{PORT}`._

If your production website uses HTTPS, you want your local development site to behave **like an HTTPS site** (if your production website doesn't use HTTPS, [make it a priority to switch to HTTPS](/why-https-matters/)). Most of the time, you can trust `http://localhost` to behave **like an HTTPS site**. But [in some cases](/when-to-use-local-https), you need to run your site locally with HTTPS. Let's take a look at how to do this.

**⏩ Are you looking for quick instructions, or have you been here before? Skip to the [Cheatsheet](#using-mkcert:-cheatsheet).**

## Running your site locally with HTTPS using mkcert (recommended) <a href="#running-your-site-locally-with-https-using-mkcert-(recommended)" class="w-headline-link">#</a>

To use HTTPS with your local development site and access `https://localhost` or `https://mysite.example` (custom hostname), you need a [TLS certificate](https://en.wikipedia.org/wiki/Public_key_certificate#TLS/SSL_server_certificate). But browsers won't consider just any certificate valid: your certificate needs to be **signed** by an entity that is trusted by your browser, called a trusted **[certificate authority (CA)](https://en.wikipedia.org/wiki/Certificate_authority)**.

What you need to do is to create a certificate and sign it with a CA that is **trusted locally** by your device and browser. [mkcert](https://github.com/FiloSottile/mkcert) is a tool that helps you do this in a few commands. Here's how it works:

- If you open your locally running site in your browser using HTTPS, your browser will check the certificate of your local development server.
- Upon seeing that the certificate has been signed by the mkcert-generated certificate authority, the browser checks whether it's registered as a trusted certificate authority.
- mkcert is listed as a trusted authority, so your browser trusts the certificate and creates an HTTPS connection.

<figure><img src="https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format" alt="A diagram of how mkcert works." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/3kdjci7NORnOw54fMia9.jpg?auto=format&amp;w=1600 1600w" width="800" height="787" /><figcaption>A diagram of how mkcert works.</figcaption></figure>mkcert (and similar tools) provide several benefits:

- mkcert is specialized in creating certificates that are **compliant with what browsers consider valid certificates**. It stays updated to match requirements and best practices. This is why you won't have to run mkcert commands with complex configurations or arguments to generate the right certificates!
- mkcert is a cross-platform tool. Anyone on your team can use it.

mkcert is the tool we recommend for creating a TLS certificate for local development. You can check out [other options](#running-your-site-locally-with-https:-other-options) too.

Many operating systems may include libraries to produce certificates, such as [openssl](https://www.openssl.org/). Unlike mkcert and similar tools, such libraries may not consistently produce correct certificates, may require complex commands to be run, and are not necessarily cross-platform.

**Gotchas!**

The mkcert we're interested in in this post is [this one](https://github.com/FiloSottile/mkcert), not [this one](https://www.npmjs.com/package/mkcert).

### Caution <a href="#caution" class="w-headline-link">#</a>

- Never export or share the file `rootCA-key.pem` mkcert creates automatically when you run `mkcert -install`. **An attacker getting hold of this file can create on-path attacks for any site you may be visiting**. They could intercept secure requests from your machine to any site—your bank, healthcare provider, or social networks. If you need to know where `rootCA-key.pem` is located to make sure it's safe, run `mkcert -CAROOT`.
- Only use mkcert for **development purposes**—and by extension, never ask end-users to run mkcert commands.
- Development teams: all members of your team should install and run mkcert **separately** (not store and share the CA and certificate).

### Setup <a href="#setup" class="w-headline-link">#</a>

1.  Install mkcert (only once).

    Follow the [instructions](https://github.com/FiloSottile/mkcert#installation) for installing mkcert on your operating system. For example, on macOS:

        brew install mkcert
        brew install nss # if you use Firefox

2.  Add mkcert to your local root CAs.

    In your terminal, run the following command:

        mkcert -install

    This generates a local certificate authority (CA). Your mkcert-generated local CA is only trusted **locally**, on your device.

3.  Generate a certificate for your site, signed by mkcert.

    In your terminal, navigate to your site's root directory or whichever directory you'd like the certificates to be located at.

    Then, run:

        mkcert localhost

    If you're using a custom hostname like `mysite.example`, run:

        mkcert mysite.example

    The command above does two things:

    - Generates a certificate for the hostname you've specified
    - Lets mkcert (that you've added as a local CA in Step 2) sign this certificate.

    Now, your certificate is ready and signed by a certificate authority your browser trusts locally. You're almost done, but your server doesn't know about your certificate yet!

4.  Configure your server.

    You now need to tell your server to use HTTPS (since development servers tend to use HTTP by default) and to use the TLS certificate you've just created.

    How to do this exactly depends on your server. A few examples:

    **👩🏻‍💻 With node:**

    `server.js` (replace `{PATH/TO/CERTIFICATE...}` and `{PORT}`):

        const https = require('https');
        const fs = require('fs');
        const options = {
          key: fs.readFileSync('{PATH/TO/CERTIFICATE-KEY-FILENAME}.pem'),
          cert: fs.readFileSync('{PATH/TO/CERTIFICATE-FILENAME}.pem'),
        };
        https
          .createServer(options, function (req, res) {
            // server code
          })
          .listen({PORT});

    **👩🏻‍💻 With [http-server](https://www.npmjs.com/package/http-server):**

    Start your server as follows (replace `{PATH/TO/CERTIFICATE...}`):

        http-server -S -C {PATH/TO/CERTIFICATE-FILENAME}.pem -K {PATH/TO/CERTIFICATE-KEY-FILENAME}.pem

    `-S` runs your server with HTTPS, while `-C` sets the certificate and `-K` sets the key.

    **👩🏻‍💻 With a React development server:**

    Edit your `package.json` as follows, and replace `{PATH/TO/CERTIFICATE...}`:

        "scripts": {
        "start": "HTTPS=true SSL_CRT_FILE={PATH/TO/CERTIFICATE-FILENAME}.pem SSL_KEY_FILE={PATH/TO/CERTIFICATE-KEY-FILENAME}.pem react-scripts start"

    For example, if you've created a certificate for `localhost` that is located in your site's root directory as follows:

        |-- my-react-app
            |-- package.json
            |-- localhost.pem
            |-- localhost-key.pem
            |--...

    Then your `start` script should look like this:

        "scripts": {
            "start": "HTTPS=true SSL_CRT_FILE=localhost.pem SSL_KEY_FILE=localhost-key.pem react-scripts start"

    **👩🏻‍💻 Other examples:**

    - [Angular development server](https://angular.io/cli/serve)
    - [Python](https://blog.anvileight.com/posts/simple-python-http-server/)

5.  ✨ You're done! Open `https://localhost` or `https://mysite.example` in your browser: you're running your site locally with HTTPS. You won't see any browser warnings, because your browser trusts mkcert as a local certificate authority.

Your server may use a different port for HTTPS.

### Using mkcert: cheatsheet <a href="#using-mkcert:-cheatsheet" class="w-headline-link">#</a>

## mkcert in short

To run your local development site with HTTPS:

1.  Set up mkcert.

    If you haven't yet, install mkcert, for example on macOS:

        brew install mkcert

    Check [install mkcert](https://github.com/FiloSottile/mkcert#installation) for Windows and Linux instructions.

    Then, create a local certificate authority:

        mkcert -install

2.  Create a trusted certificate.

        mkcert {YOUR HOSTNAME e.g. localhost or mysite.example}

    This create a valid certificate (that will be signed by `mkcert` automatically).

3.  Configure your development server to use HTTPS and the certificate you've created in Step 2.

4.  ✨ You're done! You can now access `https://{YOUR HOSTNAME}` in your browser, without warnings

Do this only for **development purposes** and **never export or share** the file `rootCA-key.pem` (if you need to know where this file is located to make sure it's safe, run `mkcert -CAROOT`).

## Running your site locally with HTTPS: other options <a href="#running-your-site-locally-with-https:-other-options" class="w-headline-link">#</a>

### Self-signed certificate <a href="#self-signed-certificate" class="w-headline-link">#</a>

You may also decide to not use a local certificate authority like mkcert, and instead **sign your certificate yourself**.

Beware of a few pitfalls with this approach:

- Browsers don't trust you as a certificate authority and they'll show warnings you'll need to bypass manually. In Chrome, you may use the flag `#allow-insecure-localhost` to bypass this warning automatically on `localhost`. It feels a bit hacky, because it is.
- This is unsafe if you're working in an insecure network.
- Self-signed certificates won't behave in exactly the same way as trusted certificates.
- It's not necessarily easier or faster than using a local CA like mkcert.
- If you're not using this technique in a browser context, you may need to disable certificate verification for your server. Omitting to re-enable it in production would be dangerous.

<figure><img src="https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format" alt="The warnings browsers show when a self-signed certificate is used." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/KxLz7mcUudiFwWBIdhH8.jpg?auto=format&amp;w=1600 1600w" width="800" height="598" /><figcaption>The warnings browsers show when a self-signed certificate is used.</figcaption></figure>If you don't specify any certificate, [React's](https://create-react-app.dev/docs/using-https-in-development/) and [Vue's](https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-serve) development server HTTPS options create a self-signed certificate under the hood. This is quick, but you'll get browser warnings and encounter other pitfalls related to self-signed certificates that are listed above. Luckily you can use frontend frameworks' built-in HTTPS option **and** specify a locally trusted certificate created via mkcert or similar. See how to do this in the [mkcert with React example](/#setup:~:text=a%20React%20development%20server).

## Why don't browsers trust self-signed certificates?

If you open your locally running site in your browser using HTTPS, your browser will check the certificate of your local development server. When it sees that the certificate has been signed by yourself, it checks whether you're registered as a trusted certificate authority. Because you're not, your browser can't trust the certificate; it displays a warning telling you that your connection is not secure. You may proceed at your own risk—if you do, an HTTPS connection will be created.

<figure><img src="https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format" alt="Why browsers don&#39;t trust self-signed certificates." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/V2SAcIzuofqzUuestOOX.jpg?auto=format&amp;w=1600 1600w" width="800" height="833" /><figcaption>Why browsers don't trust self-signed certificates.</figcaption></figure>### Certificate signed by a regular certificate authority <a href="#certificate-signed-by-a-regular-certificate-authority" class="w-headline-link">#</a>

You may also find techniques based on having an actual certificate authority—not a local one—sign your certificate.

A few things to keep in mind if you're considering using these techniques:

- You'll have more setup work to do than when using a local CA technique like mkcert.
- You need to use a domain name that you control and that is valid. This means that you **can't** use actual certificate authorities for:
  - `localhost` and other domain names that are [reserved](https://www.iana.org/assignments/special-use-domain-names/special-use-domain-names.xhtml), such as `example` or `test`.
  - Any domain name that you don't control.
  - Top-level domains that are not valid. See the [list of valid top-level domains](https://www.iana.org/domains/root/db).

### Reverse proxy <a href="#reverse-proxy" class="w-headline-link">#</a>

Another option to access a locally running site with HTTPS is to use a [reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy) such as [ngrok](https://ngrok.com/).

A few points to consider:

- Anyone can access your local development site once you share with them a URL created with a reverse proxy. This can be very handy when demoing your project to clients! Or this can be a downside, if your project is sensitive.
- You may need to consider pricing.
- New [security measures](/cors-rfc1918-feedback/) in browsers may affect the way these tools work.

### Flag (not recommended) <a href="#flag-(not-recommended)" class="w-headline-link">#</a>

If you're using a custom hostname like `mysite.example`, you can use a flag in Chrome to forcefully consider `mysite.example` secure. **Avoid doing this**, because:

- You would need to be 100% sure that `mysite.example` always resolves to a local address, otherwise you could leak production credentials.
- You won't be able to debug across browsers with this trick 🙀.

_With many thanks for contributions and feedback to all reviewers and contributors—especially Ryan Sleevi, Filippo Valsorda, Milica Mihajlija and Rowan Merewood. 🙌_

_Hero image background by [@anandu](https://unsplash.com/@anandu) on [Unsplash](https://unsplash.com/photos/pbxwxwfI0B4), edited._

<a href="/tags/security/" class="w-chip">Security</a>

<span class="w-mr--sm"> Last updated: Jan 25, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/how-to-use-local-https/index.md)

<a href="/blog" class="w-article-navigation__link w-article-navigation__link--back w-article-navigation__link--single gc-analytics-event">Return to all articles</a>

- ### Contribute

  - <a href="https://github.com/GoogleChrome/web.dev/issues/new?assignees=&amp;labels=bug&amp;template=bug_report.md&amp;title=" class="w-footer__linkbox-link">File a bug</a>
  - <a href="https://github.com/googlechrome/web.dev" class="w-footer__linkbox-link">View source</a>

- ### Related content

  - <a href="https://blog.chromium.org/" class="w-footer__linkbox-link">Chrome updates</a>
  - <a href="https://developers.google.com/web/" class="w-footer__linkbox-link">Web Fundamentals</a>
  - <a href="https://developers.google.com/web/showcase/" class="w-footer__linkbox-link">Case studies</a>
  - <a href="https://devwebfeed.appspot.com/" class="w-footer__linkbox-link">DevWeb Content Firehose</a>
  - <a href="/podcasts/" class="w-footer__linkbox-link">Podcasts</a>
  - <a href="/shows/" class="w-footer__linkbox-link">Shows</a>

- ### Connect

  - <a href="https://www.twitter.com/@ChromiumDev" class="w-footer__linkbox-link">Twitter</a>
  - <a href="https://www.youtube.com/user/ChromeDevelopers" class="w-footer__linkbox-link">YouTube</a>

<a href="https://developers.google.com/" class="w-footer__utility-logo-link"><img src="/images/lockup-color.png" alt="Google Developers" class="w-footer__utility-logo" width="185" height="33" /></a>

- <a href="https://developer.chrome.com/home" class="w-footer__utility-link">Chrome</a>
- <a href="https://firebase.google.com/" class="w-footer__utility-link">Firebase</a>
- <a href="https://cloud.google.com/" class="w-footer__utility-link">Google Cloud Platform</a>
- <a href="https://developers.google.com/products" class="w-footer__utility-link">All products</a>

<!-- -->

- <a href="https://policies.google.com/" class="w-footer__utility-link">Terms &amp; Privacy</a>
- <a href="/community-guidelines/" class="w-footer__utility-link">Community Guidelines</a>

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies).
