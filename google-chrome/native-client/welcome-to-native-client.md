---json {"title":"Welcome to Native Client"} ---

{% include 'partials/nacl-warning.njk' %}

---

To get the SDK and  
installation instructions  
[visit the SDK Download page](/docs/native-client/sdk/download).

**Native Client** is a sandbox for running compiled C and C++ code in the browser efficiently and securely, independent of the user’s operating system. **Portable Native Client** extends that technology with architecture independence, letting developers compile their code once to run in any website and on any architecture with ahead-of-time (AOT) translation.

In short, Native Client brings the **performance** and **low-level control** of native code to modern web browsers, without sacrificing the **security** and **portability** of the web. Watch the video below for an overview of Native Client, including its goals, how it works, and how Portable Native Client lets developers run native compiled code on the web.

This site uses several examples of Native Client. For the best experience, consider downloading the <a href="https://www.google.com/chrome/" class="reference external">latest version of Chrome</a>. When you come back, be sure to <a href="https://gonativeclient.appspot.com/demo" class="reference external">check out our demos</a>.

{% YouTube id='MvKEomoiKBA' %}

## Two Types of Modules

Native Client comes in two flavors.

- **Portable Native Client (PNaCl)**: Pronounced ‘pinnacle’, PNaCl runs single, portable (**pexe**) executables and is available in most implementations of Chrome. A translator built into Chrome translates the pexe into native code for the client hardware. The entire module is translated before any code is executed rather than as the code is executed. PNaCl modules can be hosted from any web server.
- **Native Client (NaCl)**: Also called traditional or non-portable Native Client, NaCl runs architecture-dependent (**nexe**) modules, which are packaged into an application. At runtime, the browser decides which nexe to load based on the architecture of the client machine. Apps and Extensions installed via the <a href="https://chrome.google.com/webstore/category/apps" class="reference external">Chrome Web Store (CWS)</a> can use NaCl modules without additional prompting. NaCl apps can also be installed from chrome://extensions or the command-line during development, however, this is not a recommended distribution mechanism.

These flavors are described in more depth in <a href="/docs/native-client/nacl-and-pnacl" class="reference internal"><em>PNaCl and NaCl</em></a>

## Hello World

To jump right in <a href="/docs/native-client/devguide/tutorial/tutorial-part1" class="reference internal"><em>take the tutorial</em></a> that walks you through a basic web application for Portable Native Client (PNaCl). This is a client-side application that uses HTML, JavaScript, and a Native Client module written in C++.

## A Little More Advanced

If you’ve already got the basics down, you’re probably trying to get a real application ready for production. You’re <a href="/docs/native-client/devguide/devcycle/building" class="reference internal"><em>building</em></a>, <a href="/docs/native-client/devguide/devcycle/debugging" class="reference internal"><em>debugging</em></a> or <a href="/docs/native-client/devguide/distributing" class="reference internal"><em>ready to distribute</em></a>.

## Nuts and Bolts

You’ve been working on a Native Client module for a while now and you’ve run into an arcane problem. You may need to refer to the <a href="/docs/native-client/reference/pnacl-bitcode-abi" class="reference internal"><em>PNaCl Bitcode Reference</em></a> or the <a href="/docs/native-client/reference/sandbox_internals/index" class="reference internal"><em>Sandbox internals</em></a>.

## I Want to Know Everything

So, you like to read now and try later. Start with our <a href="/docs/native-client/overview" class="reference internal"><em>Technical Overview</em></a>

Send us comments and feedback on the <a href="https://groups.google.com/forum/#!forum/native-client-discuss" class="reference external">native-client-discuss</a> mailing list, or ask questions using Stack Overflow’s <a href="https://stackoverflow.com/questions/tagged/google-nativeclient" class="reference external">google-nativeclient</a> tag.
