---json {"title":"A Saga of Fire and Water - Codelab"} ---

{% include 'partials/nacl-warning.njk' %}

---

## Introduction

Learn the basics of using PPAPI to do 2D graphics from a C++ program running in Native Client. Modify our sample to turn fire into water. Develop inside Google Chrome, using our NaCl Development Environment Chrome App. While this codelab currently targets conventional Native Client using our GCC + GlibC based toolchain, the techniques involved are generally applicable.

Requirements:

- An x86 (sorry no arm) Desktop / Laptop Windows, Mac, Linux, or ChromeOS browser  
  <span id="cpp_compat" style="color: #cccc00">Checking browser compatibility...</span>
- A fast broadband connection (500MB download)
- Can read and write C++

## Setup

For this codelab, you will need to install the our Beta NaCl Dev Environment App in your web browser.

[Click here to install the environment.](https://chrome.google.com/webstore/detail/nacl-development-environm/aljpgkjeipgnmdpikaajmnepbcfkglfa)

You will need to click “Install” to add the NaCl Dev Environment to your browser.

NOTE: This environment will leave a substantial (800MB) payload in your browser. See the cleanup section below to learn how to recover this space.

Once the installation is complete, run the app.

On the first run, it will download several packages. Once download is complete, you should see a bash prompt:

    bash.nmf-4.3$

### Our Web-based Tools

These development tools are a <a href="/docs/native-client/cds2014/nacldev/" class="reference external">work in progress</a>. At this point, they are a learning tool and demonstration of NaCl’s flexibility, but are not the recommended tools for a production application. In the future, that may change, but for the moment, to develop a substantial application for Native Client / Portable Native Client, we recommend you use the <a href="/docs/native-client/sdk/download" class="reference external">Native Client SDK</a>.

**NOTE: The NaCl Development Environment is not yet stable. Ideally, user data is preserved, but currently it can be lost during updates or sporadically. We're working to resolve this.**

### Navigating in the Dev Environment

The NaCl Dev Environment behaves like a mini-UNIX system. You start-up in bash command prompt. Standard UNIX commands like cd, ls, mkdir, rm, rmdir, etc. can be used to navigate and modify the Dev Environment’s virtual filesystem.

There are 3 locations mounted by the environment:

- /tmp mounts the HTML5 Filesystem temporary storage area.
- /mnt/html5 mounts the HTML5 Filesystem persistent storage area.
- Your home directory ~/, located in /home/user, mounts a portion of the HTML5 Filsystem persistent storage area that corresponds to the /mnt/html5/home directory.

### Clipboard

Many of the steps in this tutorial will be easier to copy and paste into the Dev Environment. To copy and paste in the Dev Environment App, you will need to use the keyboard.

On your platform use:

- <span id="copy_key">Loading...</span>
  to Copy
- <span id="paste_key">Loading...</span>
  to Paste

#### Editing

To follow along in this codelab, you’ll need to use a text editor to modify various files in our development environment. There are currently two editor options, nano or vim. We have an Emacs port, but it is not yet available in the Dev Environment (coming soon). If you’re unsure what to pick, nano is simpler to start with and has on-screen help.

- You can open **nano** like this:

      $ nano <filename>

  Here’s an online <a href="http://mintaka.sdsu.edu/reu/nano.html" class="reference external">nano tutorial</a>.

- You can open **vim** like this:

      $ vim <filename>

  Here’s an online <a href="http://www.openvim.com/tutorial.html" class="reference external">vim tutorial</a>.

### Git Setup

This tutorial also uses a revision control program called <a href="http://en.wikipedia.org/wiki/Git_(software)" class="reference external">git</a>. In order to commit to a git repository, you need to set up your identity.

Run these commands (with your info) to setup your ~/.gitconfig for use:

    git config --global user.name "John Doe"
    git config --global user.email johndoe@example.com

## Get the Code!

Rather than start from nothing, for this codelab we’ve provided you with a zip file containing a starting point.

Download the codelab:

    curl http://nacltools.storage.googleapis.com/cds2014/cds2014_cpp.zip -O

Unzip it:

    unzip cds2014_cpp.zip

Go into the codelab directory:

    cd cds2014_cpp

Create a new local git repo:

    git init

Add everything:

    git add .

Commit it:

    git commit -am "initial"

While working, you can see what you’ve changed by running:

    git diff

## Fire is cool, let’s burn some stuff...

Indulging your inner child, lets make some virtual fire! Use the following shockingly intuitive incantation:

    make fire

You should now see a small popup window, smoldering away. If you click, you can make more fire! I think that’s pretty cool, but then I selected the institution of higher learning I attended based on the integral role fire played in its campus life.

## Water

Remarkably, not everyone enjoys the primal illusion of fire.

Your task in this codelab is to transform the rising fire effect you see before you into a beautiful, tranquil waterfall. This will require digging into some C++ code.

Before you begin, you’ll want to copy our fire program to a new name, since you might decide later that you like fire better, I know I do:

    cp fire.cc water.cc
    git add water.cc
    git commit -am "adding water"

For this codelab, you’ll only need to change water.cc.

The task of turning fire into water involves two key challenges:

- Alter the red-yellow palette of fire into a blue-green one.
- Reverse upward rising flame into downward falling water.
- Seed the waterfall from the top instead of the bottom.

At this point you’ll want to open up water.cc in the editor you picked earlier.

### I see a red door and I want it painted... blue

While PPAPI’s 2D graphics API uses multi-component RGB pixels, our flame effect is actually monochrome. A single intensity value is used in the flame simulation. This is then converted to color based on a multi-color gradient. To alter the color-scheme, locate this palette, and exchange the red component (first) with the blue one (third).

Hint: Focus your energies on the CreatePalette function.

You can test you changes at any time with:

    make water

### What goes up...

Now there’s the small matter of gravity. While smoke, and well flame, rises, we want our water to go down.

The simulation of fire loops over each pixel, bottom row to top row, diffusing “fire stuff” behind the sweep. You’ll want to reverse this.

Hint: You’ll need to change the y loop direction in the UpdateFlames function.

### Up high, down low

While you can now use the mouse to inject a trickle of water. The small line of blue at the bottom isn’t much of a waterfall. Move it to the top to complete the effect.

Hint: You’ll want to change the area that the UpdateCoals function mutates.

## What you’ve learned

In addition to learning a new appreciation for fire, you’ve also made water... And while dusting off your C/C++ image manipulation skills, you’ve discovered how easy it is to modify, build, and run a NaCl application that uses PPAPI.

2D graphics is fun, but now you’re ready to check out the wealth of other <a href="https://src.chromium.org/viewvc/chrome/trunk/src/ppapi/cpp/" class="reference external">PPAPI interfaces available</a>.

While our in-browser environment is rapidly evolving to become a complete development solution, for the broadest range of development options, check out the <a href="/native-client/cpp-api" class="reference external">NaCl SDK</a>.

Send us comments and feedback on the <a href="https://groups.google.com/forum/#!forum/native-client-discuss" class="reference external">native-client-discuss</a> mailing list, or ask questions using Stack Overflow’s <a href="https://stackoverflow.com/questions/tagged/google-nativeclient" class="reference external">google-nativeclient</a> tag.

I hope this codelab has lit a fire in you to go out there, and bring an awesome C/C++ application to NaCl or PNaCl today!

## Cleanup

The Chrome Dev Environment App installs &gt;800MB into HTML5 Filesystem storage on your device. To recover this storage, uninstall the app from the [Chrome Web Store](https://chrome.google.com/webstore).
