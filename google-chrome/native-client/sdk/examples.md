---json {"title":"Examples"} ---

<span id="sdk-examples-2" class="target"></span> {% include 'partials/nacl-warning.njk' %}

------------------------------------------------------------------------

Every Native Client SDK bundle comes with a folder of example applications. Each example demonstrates one or two key Native Client programming concepts. After you’ve <a href="/docs/native-client/sdk/download" class="reference internal"><em>downloaded the SDK</em></a>, follow the instructions on this page to build and run the examples.

Your version of Chrome must be equal to or greater than the version of your SDK bundle. For example, if you’re developing with the `pepper_35` bundle, you must use Google Chrome version 35 or greater. To find out what version of Chrome you’re using, type `about:chrome` or `about:version` in the Chrome address bar.

<span id="id1"></span>Build the SDK examples
--------------------------------------------

The Makefile scripts for the SDK examples can build multiple versions of the examples using any of the three SDK toolchains (clang-newlib, glibc, and PNaCl) and in both release and debug configurations. Note that some examples, `dlopen` for example, build only with particular toolchains.

Find the toolchains for each example by looking at the `VALID_TOOLCHAINS` variable in the Makefile for a particular example. The first item listed is the default. It’s built when you run an example make file without parameters. for example running make in the `core` directory of pepper\_35 builds the example using the `glibc` toolchain.

    $ cd pepper_35/examples/api/core
    $ make
      CXX  glibc/Release/core_x86_32.o
      LINK glibc/Release/core_unstripped_x86_32.nexe
      VALIDATE glibc/Release/core_unstripped_x86_32.nexe
      CXX  glibc/Release/core_x86_64.o
      LINK glibc/Release/core_unstripped_x86_64.nexe
      VALIDATE glibc/Release/core_unstripped_x86_64.nexe
      CXX  glibc/Release/core_arm.o
      LINK glibc/Release/core_unstripped_arm.nexe
      VALIDATE glibc/Release/core_unstripped_arm.nexe
      STRIP glibc/Release/core_x86_32.nexe
      STRIP glibc/Release/core_x86_64.nexe
      STRIP glibc/Release/core_arm.nexe
      CREATE_NMF glibc/Release/core.nmf

As you can see, this produces a number of architecture specific nexe files in the `pepper_35/examples/api/core/Release` directory. Create debug versions by using the `CONFIG` parameter of the make command.

    $make CONFIG=Debug

This creates similar output, but in `pepper_35/examples/api/core/Debug`.

Select a different toolchain with the `TOOLCHAIN` parameter. For example:

    $ cd pepper_35/examples/api/core
    $ make TOOLCHAIN=pnacl CONFIG=Release
      CXX  pnacl/Release/core.o
      LINK pnacl/Release/core_unstripped.bc
      FINALIZE pnacl/Release/core_unstripped.pexe
      CREATE_NMF pnacl/Release/core.nmf

You can also set `TOOLCHAIN` to `all` to build all Release versions with default toolchains.

    $ cd pepper_35/examples/api/core
    $ make TOOLCHAIN=all
    make TOOLCHAIN=clang-newlib
    make[1]: Entering directory 'pepper_35/examples/api/core'
      CXX  clang-newlib/Release/core_x86_32.o
      LINK clang-newlib/Release/core_unstripped_x86_32.nexe
      VALIDATE clang-newlib/Release/core_unstripped_x86_32.nexe
      CXX  clang-newlib/Release/core_x86_64.o
      LINK clang-newlib/Release/core_unstripped_x86_64.nexe
      VALIDATE clang-newlib/Release/core_unstripped_x86_64.nexe
      CXX  clang-newlib/Release/core_arm.o
      LINK clang-newlib/Release/core_unstripped_arm.nexe
      VALIDATE clang-newlib/Release/core_unstripped_arm.nexe
      STRIP clang-newlib/Release/core_x86_32.nexe
      STRIP clang-newlib/Release/core_x86_64.nexe
      STRIP clang-newlib/Release/core_arm.nexe
      CREATE_NMF clang-newlib/Release/core.nmf
    make[1]: Leaving directory 'pepper_35/examples/api/core'
    make TOOLCHAIN=glibc
    make[1]: Entering directory 'pepper_35/examples/api/core'
      CXX  glibc/Release/core_x86_32.o
      LINK glibc/Release/core_unstripped_x86_32.nexe
      VALIDATE glibc/Release/core_unstripped_x86_32.nexe
      CXX  glibc/Release/core_x86_64.o
      LINK glibc/Release/core_unstripped_x86_64.nexe
      VALIDATE glibc/Release/core_unstripped_x86_64.nexe
      ...
      (content excerpted)
      ...

### <span id="id2"></span>Build results

After running `make`, example directories will contain one or more of the following subdirectories, depending on which Makefile you run:

-   `clang-newlib` with subdirectories `Debug` and `Release`;
-   `glibc` with subdirectories `Debug` and `Release`;
-   `pnacl` with subdirectories `Debug` and `Release`;

For the clang-newlib and glibc toolchains the Debug and Release subdirectories contain .nexe files for all target architectures. For the PNaCl toolchain they contain a single .pexe file. PNaCl debug also produces pre-translated .nexe files, for ease of debugging. All Debug and Release directories contain a manifest (.nmf) file that references the associated .nexe or .pexe files. For information about Native Client manifest files, see the <a href="/docs/native-client/overview" class="reference internal"><em>Technical Overview</em></a>.

For details on how to use `make`, see the <a href="http://www.gnu.org/software/make/manual/make.html" class="reference external">GNU ‘make’ Manual</a>. For details on how to use the SDK toolchain itself, see <a href="/docs/native-client/devguide/devcycle/building" class="reference internal"><em>Building Native Client Modules</em></a>.

<span id="running-the-sdk-examples"></span>Run the SDK examples
---------------------------------------------------------------

### <span id="disable-chrome-cache"></span>Disable the Chrome cache

Chrome’s intelligent caching caches resources aggressively. When building a Native Client application you should disable the cache to make sure that Chrome loads the latest version. Intelligent caching only remains inactive while Developer Tools are open. Otherwise, aggressive caching continues.

1.  Open Chrome’s developer tools by clicking the menu icon ![menu-icon](/docs/native-client/images/menu-icon.png) and choosing Tools &gt; Developer tools.
2.  Click the gear icon ![gear-icon](/docs/native-client/images/gear-icon.png) in the bottom right corner of the Chrome window.
3.  Under the “General” settings, check the box next to “Disable cache”.

### <span id="id3"></span>Run the examples

To run the SDK examples, use the `make run` command:

    $ cd pepper_35/examples/api/core
    $ make run

This launches a local HTTP server that serves the example. It then launches Chrome with the address of this server, usually `http://localhost:5103`. After you close Chrome, the local HTTP server automatically shuts down.

This command tries to find an executable named `google-chrome` in your `PATH` environment variable. If it can’t, you’ll get an error message like this:

    pepper_35/tools/common.mk:415: No valid Chrome found at CHROME_PATH=
    pepper_35/tools/common.mk:415: *** Set CHROME_PATH via an environment variable, or command-line..  Stop.

### <span id="add-an-env-variable-for-chrome"></span>Add an environment variable for Chrome

Set the CHROME\_PATH environment variable to the location of your Chrome executable.

-   On Windows:

    The default install location of Chrome is `C:\Program Files (x86)\Google\Chrome\Application\chrome.exe` for Chrome stable and `C:\Users\<username>\AppData\Local\Google\Chrome SxS\Application\chrome.exe` for Chrome Canary. Try looking in those directories first:

        > set CHROME_PATH=<Path to chrome.exe>

-   On Linux:

        $ export CHROME_PATH=<Path to google-chrome>

-   On Mac:

    The default install location of Chrome is `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome` for Chrome Stable and `Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary` for Chrome Canary. Note that you have to reference the executable inside the application bundle, not the top-level `.app` directory:

        $ export CHROME_PATH=<Path to Google Chrome>

<span id="run-sdk-examples-as-packaged"></span>Run the SDK examples as Chrome apps
----------------------------------------------------------------------------------

Each example can also be launched as a Chrome apps. A Chrome app is a special zip file (with a .crx extension) hosted in the Chrome Web Store. This file contains all of the application parts: A Chrome Web Store manifest file (`manifest.json`), an icon, and all of the regular Native Client application files. Refer to <a href="/apps" class="reference external">What are Chrome Apps</a> for more information about creating a Chrome app.

Some Pepper features, such as <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_t_c_p_socket/" class="reference external">TCP</a> or <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_d_p_socket/" class="reference external">UDP</a> socket access, are only allowed in <a href="/apps" class="reference external">Chrome apps</a>. The examples that use these features must be run as <a href="/apps" class="reference external">Chrome apps</a>, by using the following command:

    $ make run_package

You can use `TOOLCHAIN` and `CONFIG` parameters as described above to run with a different toolchain or configuration.

<span id="id5"></span>Debugging the SDK examples
------------------------------------------------

The NaCl SDK uses <a href="https://www.gnu.org/software/gdb/" class="reference external">GDB</a> to debug Native Client code. The SDK includes a prebuilt version of GDB that is compatible with NaCl code. To use it, run the `make debug` command from an example directory:

    $ make debug

This launches Chrome with the `--enable-nacl-debug` flag set. This flag causes Chrome to pause when a NaCl module is first loaded, waiting for a connection from gdb. The `make debug` command also simultaneously launches GDB and loads the symbols for that NEXE. To connect GDB to Chrome, in the GDB console, type:

    (gdb) target remote :4014

This tells GDB to connect to a TCP port on `localhost:4014`, the port that Chrome is listening on. GDB will respond:

    Remote debugging using :4014
    0x000000000fa00080 in ?? ()

At this point, you can use the standard GDB commands to debug your NaCl module. The most common commands you will use to debug are `continue`, `step`, `next`, `break` and `backtrace`. See <a href="/docs/native-client/devguide/devcycle/debugging" class="reference internal"><em>Debugging</em></a> for more information about debugging a Native Client application.
