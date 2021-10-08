---json {"title":"Technical Overview"} ---

{% include 'partials/nacl-warning.njk' %}

---

- <a href="#why-use-native-client" id="id7" class="reference internal">Why use Native Client?</a>
- <a href="#benefits-of-native-client" id="id8" class="reference internal">Benefits of Native Client</a>
- <a href="#common-use-cases" id="id9" class="reference internal">Common use cases</a>
- <a href="#how-native-client-works" id="id10" class="reference internal">How Native Client works</a>

  - <a href="#toolchains" id="id11" class="reference internal">Toolchains</a>
  - <a href="#security" id="id12" class="reference internal">Security</a>
  - <a href="#link-for-pnacl-translator" id="id13" class="reference internal">Portability</a>

- <a href="#structure-of-a-web-application" id="id14" class="reference internal">Structure of a web application</a>

  - <a href="#pepper-plug-in-api" id="id15" class="reference internal">Pepper plug-in API</a>

- <a href="#where-to-start" id="id16" class="reference internal">Where to start</a>

**Native Client** (NaCl) is an open-source technology for running native compiled code in the browser, with the goal of maintaining the portability and safety that users expect from web applications. Native Client expands web programming beyond JavaScript, enabling you to enhance your web applications using your preferred language. This document describes some of the key benefits and common use cases of Native Client.

Google has implemented the open-source <a href="http://www.chromium.org/nativeclient" class="reference external">Native Client project</a> in the Chrome browser on Windows, Mac, Linux, and Chrome OS. The <a href="/docs/native-client/sdk/download" class="reference internal"><em>Native Client Software Development Kit (SDK)</em></a>, itself an open-source project, lets you create web applications that use NaCl and run in Chrome across multiple platforms.

A Native Client web application consists of JavaScript, HTML, CSS, and a NaCl module written in a language supported by the SDK. The NaCl SDK currently supports C and C++; as compilers for additional languages are developed, the SDK will be updated.

![A web application with and without Native Client](/docs/native-client/images/web-app-with-nacl.png)

A web application with and without Native Client

Native Client comes in two flavors: traditional (NaCl) and portable (PNaCl). Traditional, which must be distributed through the Chrome Web Store lets you target a specific hardware platform. Portable can run on the open web. A bitcode file that can be loaded from any web server is downloaded to a client machine and converted to hardware-specific code before any execution. For details, see <a href="/docs/native-client/nacl-and-pnacl" class="reference internal"><em>NaCl and PNaCl</em></a>.

## <span id="id1"></span>Why use Native Client?

Native Client open-source technology is designed to run compiled code securely inside a browser at near-native speeds. Native Client gives web applications some advantages of desktop software. Specifically, it provides the means to fully harness the client’s computational resources for applications such as:

- 3D games
- multimedia editors
- CAD modeling
- client-side data analytics
- interactive simulations.

Native Client gives C and C++ (and other languages targeting it) the same level of portability and safety as JavaScript.

## <span id="id2"></span>Benefits of Native Client

Benefits of Native Client include:

- **Graphics, audio, and much more:** Running native code modules that render 2D and 3D graphics, play audio, respond to mouse and keyboard events, run on multiple threads, and access memory directly—all without requiring the user to install a plug-in.
- **Portability:** Writing your applications once and running them on multiple operating systems (Windows, Linux, Mac, and Chrome OS) and CPU architectures (x86 and ARM).
- **Easy migration path to the web:** Leveraging years of work in existing desktop applications. Native Client makes the transition from the desktop to a web application significantly easier because it supports C and C++.
- **Security:** Protecting the user’s system from malicious or buggy applications through Native Client’s double sandbox model. This model offers the safety of traditional web applications without sacrificing performance and without requiring users to install a plug-in.
- **Performance:** Running at speeds within 5% to 15% of a native desktop application. Native Client also allows applications to harness all available CPU cores via a threading API. This enables demanding applications such as console-quality games to run inside the browser.

## <span id="id3"></span>Common use cases

Typical use cases for Native Client include the following:

- **Existing software components:** Native Client lets you repurpose existing C and C++ software in web applications. You don’t need to rewrite and debug code that already works. It also lets your application take advantage of things the browser does well such as handling user interaction and processing events. You can also take advantage of the latest developments in HTML5.
- **Legacy desktop applications:** Native Client provides a smooth migration path from desktop applications to the web. You can port and recompile existing code for the computation engine of your application directly to Native Client, and need rebuild only the user interface and event handling portions for the browser.
- **Heavy computation in enterprise applications:** Native Client can handle the number crunching required by large-scale enterprise applications. To ensure protection of user data, Native Client lets you run complex cryptographic algorithms directly in the browser so that unencrypted data never goes out over the network.
- **Multimedia applications:** Codecs for processing sounds, images, and movies can be added to the browser in a Native Client module.
- **Games:** Native Client lets web applications run at close to native speed, reuse existing multithreaded/multicore C/C++ code bases, and access low-latency audio, networking APIs, and OpenGL ES with programmable shaders. Native Client is a natural fit for running a physics engine or artificial intelligence module that powers a sophisticated web game. Native Client also enables applications to run unchanged across many platforms.
- **Any application that requires acceleration:** Native Client fits seamlessly into web applications. It’s up to you to decide to what extent to use it. Use of Native Client covers the full spectrum from complete applications to small optimized routines that accelerate vital parts of web applications.

## <span id="link-how-nacl-works"></span>How Native Client works

Native Client is an umbrella name for a set of related software components for developing C/C++ applications and running them securely on the web. At a high level, Native Client consists of:

- **Toolchains:** collections of development tools (compilers, linkers, etc.) that transform C/C++ code to Portable Native Client modules or Native Client modules.
- **Runtime components:** components embedded in the browser or other host platforms that allow execution of Native Client modules securely and efficiently.

The following diagram shows how these components interact:

![The Native Client toolchains and their outputs](/docs/native-client/images/nacl-pnacl-component-diagram.png)

The Native Client toolchains and their outputs

### <span id="id4"></span>Toolchains

A Native Client toolchain consists of a compiler, a linker, an assembler and other tools that are used to convert C/C++ source code into a module that is loadable by a browser.

The Native Client SDK provides two toolchains:

- The left side of the diagram shows **Portable Native Client** (PNaCl, pronounced “pinnacle”). An LLVM based toolchain produces a single, portable (**pexe**) module. At runtime an ahead-of-time (AOT) translator, built into the browser, translates the pexe into native code for the relevant client architecture.
- The right side of the diagram shows **(non-portable) Native Client**. A GCC based toolchain produces multiple architecture-dependent (**nexe**) modules, which are packaged into an application. At runtime the browser determines which nexe to load based on the architecture of the client machine.

The PNaCl toolchain is recommended for most applications. The NaCl-GCC toolchain should only be used for applications that won’t be distributed on the open web.

### <span id="id5"></span>Security

Since Native Client permits the execution of native code on client machines, special security measures have to be implemented:

- The NaCl sandbox ensures that code accesses system resources only through safe, whitelisted APIs, and operates within its limits without attempting to interfere with other code running either within the browser or outside it.
- The NaCl validator statically analyzes code before running it to make sure it only uses code and data patterns that are permitted and safe.

These security measures are in addition to the existing sandbox in the Chrome browser. The Native Client module always executes in a process with restricted permissions. The only interaction between this process and the outside world is through defined browser interfaces. Because of the combination of the NaCl sandbox and the Chrome sandbox, we say that Native Client employs a **double sandbox** design.

### <span id="portability"></span><span id="id6"></span>Portability

Portable Native Client (PNaCl, prounounced “pinnacle”) employs state-of-the-art compiler technology to compile C/C++ source code to a portable bitcode executable (**pexe**). PNaCl bitcode is an OS- and architecture-independent format that can be freely distributed on the web and <a href="#link-nacl-in-web-apps" class="reference internal"><em>embedded in web applications</em></a>.

The PNaCl translator is a component embedded in the Chrome browser; its task is to run pexe modules. Internally, the translator compiles a pexe to a nexe (described above), and then executes the nexe within the Native Client sandbox as described above. The translator uses intelligent caching to avoid re-compiling the pexe if it was previously compiled on the client’s browser.

Native Client also supports the execution of nexe modules directly in the browser. However, since nexes contain architecture-specific machine code, they are not allowed to be distributed on the open web. They can only be used as part of applications and extensions that are installed from the Chrome Web Store.

For more details on the difference between NaCl and PNaCl, see <a href="/docs/native-client/nacl-and-pnacl" class="reference internal"><em>NaCl and PNaCl</em></a>.

## <span id="link-nacl-in-web-apps"></span>Structure of a web application

A Native Client application consists of a set of files:

- **HTML and CSS:** The HTML file tells the browser where to find the manifest (nmf file) through the embed tag.

      <embed name="mygame" src="mygame.nmf" type="application/x-pnacl" />

- **Manifest:** The manifest identifies the module to load and specifies options. For example, “mygame.nmf” might look like this:

      {...
        ...
        "url": "mygame.pexe",
      }

- **pexe (portable NaCl file):** A compiled Native Client module. It uses the <a href="#link-pepper" class="reference internal"><em>Pepper API</em></a>, which provides a bridge to JavaScript and other browser resources.

![Structure of a web application](/docs/native-client/images/nacl-in-a-web-app.png)

Structure of a web application

For more details, see <a href="/docs/native-client/devguide/coding/application-structure" class="reference internal"><em>Application Structure</em></a>.

### <span id="link-pepper"></span>Pepper plug-in API

The Pepper plug-in API (PPAPI), called **Pepper** for convenience, is an open-source, cross-platform C/C++ API for web browser plug-ins. Pepper allows a C/C++ module to communicate with the hosting browser and to access system-level functions in a safe and portable way. One of the security constraints in Native Client is that modules cannot make OS-level calls. Pepper provides analogous APIs that modules can use instead.

You can use the Pepper APIs to gain access to the full array of browser capabilities, including:

- <a href="/docs/native-client/devguide/coding/message-system" class="reference internal"><em>Talking to the JavaScript code in your application</em></a> from the C++ code in your NaCl module.
- <a href="/docs/native-client/devguide/coding/file-io" class="reference internal"><em>Doing file I/O</em></a>.
- <a href="/docs/native-client/devguide/coding/audio" class="reference internal"><em>Playing audio</em></a>.
- <a href="/docs/native-client/devguide/coding/3D-graphics" class="reference internal"><em>Rendering 3D graphics</em></a>.

Pepper includes both a <a href="/docs/native-client/c-api" class="reference internal"><em>C API</em></a> and a <a href="/docs/native-client/cpp-api" class="reference internal"><em>C++ API</em></a>. The C++ API is a set of bindings written on top of the C API. For additional information about Pepper, see <a href="http://code.google.com/p/ppapi/wiki/Concepts" class="reference external">Pepper Concepts</a>.

## Where to start

The <a href="/docs/native-client/quick-start" class="reference internal"><em>Quick Start</em></a> document provides links to downloads and documentation to help you get started with developing and distributing Native Client applications.
