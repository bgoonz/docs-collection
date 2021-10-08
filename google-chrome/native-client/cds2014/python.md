---json {"title":"What a Difference Python Makes - Codelab"} ---

{% include 'partials/nacl-warning.njk' %}

---

## Introduction

Learn how you can use client-side Python on your webpage. Use the python [difflib](https://docs.python.org/2/library/difflib.html) module to generate attractive online textual diffs. Develop inside Google Chrome, using a hot off the presses version of our NaCl Dev Environment, running on a webpage, powered by Portable Native Client. The techniques in this codelab also apply to other interpreted languages we’ve ported to PNaCl, including: Python, Lua, Ruby, Tcl, Bash, and Forth.

Requirements:

- A Desktop / Laptop Windows, Mac, Linux, or ChromeOS browser  
  <span id="python_compat" style="color: #cccc00">Checking browser compatibility...</span>
- A fast broadband connection (500MB download)
- Can read and write Python

## Setup

For this codelab, you will need to point your web browser at the Beta preview of our in-browser NaCl Dev Environment.

[Click here to open the environment.](https://naclports.storage.googleapis.com/builds/pepper_41/trunk-176-g9b9e342/publish/devenv/pnacl/app/bash.html)

While no installation is needed, the first load of the page will require you to agree to allow the page unlimited storage (Click “Ok” in the bar at the top of your browser window.)

The first run requires a large download. Please be patient. Also, as PNaCl translates executables to native code on demand, each program will also have a noticeable load delay on first run. We’re actively working to improve this.

NOTE: This environment will leave a substantial (800MB) payload in your browser. See the cleanup section below to learn how to recover this space.

Once the download is complete, you should see a bash prompt (ignore the gcc warning, our web C compiler is coming soon!):

    WARNING: gcc not yet available for your platform (coming soon).
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

Many of the steps in this tutorial will be easier to copy and paste into the Dev Environment. To copy and paste in the Dev Environment web page, you can use the keyboard or the menu options (top right corner ☰ → Edit).

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

    geturl https://nacltools.storage.googleapis.com/cds2014/cds2014_python.zip cds2014_python.zip

Unzip it:

    unzip cds2014_python.zip

Go into the codelab directory:

    cd cds2014_python

Create a new local git repo:

    git init

Add everything:

    git add .

Commit it:

    git commit -am "initial"

While working, you can see what you’ve changed by running:

    git diff

## Your challenge, should you choose to accept it...

Javascript has many wonderful features out of the box. Unfortunately, generating textual diffs is not one of them. Python on the other hand has the [difflib](https://docs.python.org/2/library/difflib.html) module in its standard library.

The starting point you’ve just extracted contains the shell of a web app using Portable Native Client Python to generate a diff. Just one thing is missing, that whole diffing thing...

To see where things stand, deploy the sample like this:

    make

This will attempt to open the sample, but will be blocked by a popup blocker the first time. Click on the URL to accept the popup. It also clobbers /tmp/differ for good measure.

As you can see, this isn’t quite what we’re going for.

You’ll want to modify diff.py, using the editor you selected earlier. You’ll probably want to consult the [difflib](https://docs.python.org/2/library/difflib.html) documentation. I would suggest you check out the HtmlDiff class and make use of the make_file member function. Note our goal is to create a full HTML diff, so the make_table function is insufficient. The splitlines function may also come in handy.

You can test diff.py manually as you would in a normal UNIX environment. It can be run like this:

    ./diff.py before.txt after.txt out.html

Once everything is working, diff.html will contain an html diff. After the initial make you can hit “Run” to test your changes.

Now get to it, and good luck!

## What you’ve learned

While the details of building and packaging Python have been insulated from you for the purpose of this exercise, the key take-home lesson is how easy it is to leverage Python using PNaCl. As you’ve likely experienced, the initial start time is non-trivial. We’re working on improving this, both by improving PNaCl, and our Python port.

The same approach to deploying Python apps can be used for the other interpreted languages that have been ported to PNaCl.

Check out the range of interpreters, libraries, and tools <a href="https://chromium.googlesource.com/webports/+/master/docs/port_list.md" class="reference external">already ported to PNaCl and ready to be integrated with your Web App</a>.

While our in-browser environment is rapidly evolving to become a complete development solution, for the broadest range of development options, check out the <a href="/native-client/sdk/download" class="reference external">NaCl SDK</a>.

Send us comments and feedback on the <a href="https://groups.google.com/forum/#!forum/native-client-discuss" class="reference external">native-client-discuss</a> mailing list, or ask questions using Stack Overflow’s <a href="https://stackoverflow.com/questions/tagged/google-nativeclient" class="reference external">google-nativeclient</a> tag.

Bring your interpreted app to PNaCl today!

## Cleanup

The Web-based version of the Chrome Dev Environment installs package data (&gt;800MB) into the HTML5 Filesystem storage associated with naclports.storage.googleapis.com . To recover this storage (i.e. uninstall), enter **chrome://settings/cookies** in the Chrome URL bar. In the cookies UI, search for “naclports”. Then click the “x” next to the naclports entry.
