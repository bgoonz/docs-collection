--- title: How do you set up a local testing server? slug: Learn/Common\_questions/set\_up\_a\_local\_testing\_server tags: - Beginner - Express - Flask - Learn - Node - PHP - Python - django - lamp - server-side - servers ---

This article explains how to set up a simple local testing server on your machine, and the basics of how to use it.

<table><tbody><tr class="odd"><td>Prerequisites:</td><td>You need to first know <a href="/en-US/docs/Learn/Common_questions/How_does_the_Internet_work">how the Internet works</a>, and <a href="/en-US/docs/Learn/Common_questions/What_is_a_web_server">what a Web server is</a>.</td></tr><tr class="even"><td>Objective:</td><td>You will learn how to set up a local testing server.</td></tr></tbody></table>

Local files vs. remote files
----------------------------

Throughout most of the learning area, we tell you to just open your examples directly in a browser — this can be done by double clicking the HTML file, dragging and dropping it into the browser window, or choosing *File* &gt; *Open...* and navigating to the HTML file. There are many ways to achieve this.

If the web address path starts with `file://` followed by the path to the file on your local hard drive, a local file is being used. In contrast, if you view one of our examples hosted on GitHub (or an example on some other remote server), the web address will start with `http://` or `https://`, to show that the file has been received via HTTP.

The problem with testing local files
------------------------------------

Some examples won't run if you open them as local files. This can be due to a variety of reasons, the most likely being:

-   **They feature asynchronous requests**. Some browsers (including Chrome) will not run async requests (see [Fetching data from the server](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)) if you just run the example from a local file. This is because of security restrictions (for more on web security, read [Website security](/en-US/docs/Learn/Server-side/First_steps/Website_security)).
-   **They feature a server-side language**. Server-side languages (such as PHP or Python) require a special server to interpret the code and deliver the results.

Running a simple local HTTP server
----------------------------------

To get around the problem of async requests, we need to test such examples by running them through a local web server. One of the easiest ways to do this for our purposes is to use Python's `SimpleHTTPServer` (or `http.server`, depending on the version of Python installed.)

To do this:

1.  Install Python. If you are using Linux or macOS, it should be available on your system already. If you are a Windows user, you can get an installer from the Python homepage and follow the instructions to install it:

    -   Go to [python.org](https://www.python.org/)
    -   Under the Download section, click the link for Python "3.xxx".
    -   At the bottom of the page, choose the *Windows x86 executable installer* and download it.
    -   When it has downloaded, run it.
    -   On the first installer page, make sure you check the "Add Python 3.xxx to PATH" checkbox.
    -   Click *Install*, then click *Close* when the installation has finished.

2.  Open your command prompt (Windows)/ terminal (macOS/ Linux). To check Python is installed, enter the following command:

        python -V
        # Or you might have the py command available,
        # in which case try py -V

3.  This should return a version number. If this is OK, navigate to the directory that your example is inside, using the `cd` command.

        # include the directory name to enter it, for example
        cd Desktop
        # use two dots to jump up one directory level if you need to
        cd ..

4.  Enter the command to start up the server in that directory:

        # If Python version returned above is 3.X
        python3 -m http.server
        # On windows try "python" instead of "python3", or "py -3"
        # If Python version returned above is 2.X
        python -m SimpleHTTPServer

5.  By default, this will run the contents of the directory on a local web server, on port 8000. You can go to this server by going to the URL `localhost:8000` in your web browser. Here you'll see the contents of the directory listed — click the HTML file you want to run.

**Note**: If you already have something running on port 8000, you can choose another port by running the server command followed by an alternative port number, e.g. `python3 -m http.server 7800` (Python 3.x) or `python -m SimpleHTTPServer 7800` (Python 2.x). You can then access your content at `localhost:7800`.

Running server-side languages locally
-------------------------------------

Python's `SimpleHTTPServer (python 2.0) http.server (python 3.0)` module is useful, but it doesn't know how to run code written in languages such as Python, PHP or JavaScript. To handle that you'll need something more — exactly what you'll need depends on the server-side language you are trying to run. Here are a few examples:

-   To run Python server-side code, you'll need to use a Python web framework. You can find out how to use the Django framework by reading [Django Web Framework (Python)](/en-US/docs/Learn/Server-side/Django). [Flask](http://flask.pocoo.org/) is also a good (slightly less heavyweight) alternative to Django. To run this you'll need to [install Python/PIP](/en-US/docs/Learn/Server-side/Django/development_environment#installing_python_3), then install Flask using `pip3 install flask`. At this point you should be able to run the Python Flask examples using for example `python3 python-example.py`, then navigating to `localhost:5000` in your browser. [Pyramid](https://trypyramid.com) is another popular Python web framework that supports both small quick applications as well as large custom architectures.
-   To run Node.js (JavaScript) server-side code, you'll need to use raw node or a framework built on top of it. Express is a good choice — see [Express Web Framework (Node.js/JavaScript)](/en-US/docs/Learn/Server-side/Express_Nodejs).
-   To run PHP server-side code, launch [PHP's built-in development server](https://php.net/manual/en/features.commandline.webserver.php):

        $ cd path/to/your/php/code
        $ php -S localhost:8000
