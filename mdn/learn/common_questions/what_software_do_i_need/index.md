--- title: What software do I need to build a website? slug: Learn/Common\_questions/What\_software\_do\_I\_need tags: - Beginner - NeedsActiveLearning - WebMechanics ---

In this article, we lay out which software components you need when you're editing, uploading, or viewing a website.

<table><tbody><tr class="odd"><td>Prerequisites:</td><td>You should already know <a href="/en-US/docs/Learn/Common_questions/Pages_sites_servers_and_search_engines">the difference between webpages, websites, web servers, and search engines.</a></td></tr><tr class="even"><td>Objective:</td><td>Learn which software components you need if you want to edit, upload, or view a website.</td></tr></tbody></table>

Summary
-------

You can download most of the programs you need for web development for free. We'll provide a few links in this article.

You'll need tools to:

-   Create and edit webpages
-   Upload files to your web server
-   View your website

Nearly all operating systems by default include a text editor and a browser, which you can use to view websites. As a result, you usually only need to acquire software for transferring files to your web server.

Active Learning
---------------

*There is no active learning available yet. [Please, consider contributing](/en-US/docs/MDN/Contribute/Getting_started).*

Dig deeper
----------

### Creating and editing webpages

To create and edit a website, you need a text editor. Text editors create and modify unformatted text files.  Other formats, like **{{Glossary("RTF")}}**, let you add formatting, like bold or underline.  Those formats are not suitable for writing web pages. You should put some thought into which text editor you use, since you'll be working with it extensively while you're building the website.

All desktop operating systems come with a basic text editor. These editors are all straightforward, but lack special features for webpage coding. If you want something a bit fancier, there are plenty of third-party tools available. Third-party editors often come with extra features, including syntax coloring, auto-completion, collapsible sections, and code search. Here is a short list of editors:

<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Operating system</th><th>Built-in editor</th><th>Third-party editor</th></tr></thead><tbody><tr class="odd"><td>Windows</td><td><ul><li><a href="https://en.wikipedia.org/wiki/Notepad_%28software%29">Notepad</a></li></ul></td><td><ul><li><a href="https://notepad-plus-plus.org/">Notepad++</a></li><li><a href="https://www.visualstudio.com/">Visual Studio Code</a></li><li><a href="https://www.jetbrains.com/webstorm/">Web Storm</a></li><li><a href="http://brackets.io/">Brackets</a></li><li><a href="https://shiftedit.net/">ShiftEdit</a></li><li><a href="https://www.sublimetext.com/">Sublime Text</a></li></ul></td></tr><tr class="even"><td>Mac OS</td><td><ul><li><a href="https://en.wikipedia.org/wiki/TextEdit">TextEdit</a></li></ul></td><td><ul><li><a href="https://www.barebones.com/products/textwrangler/">TextWrangler</a></li><li><a href="https://www.visualstudio.com/">Visual Studio Code</a></li><li><a href="http://brackets.io/">Brackets</a></li><li><a href="https://shiftedit.net/">ShiftEdit</a></li><li><a href="https://www.sublimetext.com/">Sublime Text</a></li></ul></td></tr><tr class="odd"><td>Linux</td><td><ul><li><a href="https://en.wikipedia.org/wiki/Vi">Vi</a> (All UNIX)</li><li><a href="https://en.wikipedia.org/wiki/Gedit">GEdit</a> (Gnome)</li><li><a href="https://en.wikipedia.org/wiki/Kate_%28text_editor%29">Kate</a> (KDE)</li><li><a href="https://en.wikipedia.org/wiki/Leafpad">LeafPad</a> (Xfce)</li></ul></td><td><ul><li><a href="https://www.gnu.org/software/emacs/">Emacs</a></li><li><a href="https://www.vim.org/">Vim</a></li><li><a href="https://www.visualstudio.com/">Visual Studio Code</a></li><li><a href="http://brackets.io/">Brackets</a></li><li><a href="https://shiftedit.net/">ShiftEdit</a></li><li><a href="https://www.sublimetext.com/">Sublime Text</a></li></ul></td></tr><tr class="even"><td>Chrome OS</td><td></td><td><ul><li><a href="https://shiftedit.net/">ShiftEdit</a></li></ul></td></tr></tbody></table>

Here is a screenshot of an advanced text editor:

![Screenshot of Notepad++.](notepadplusplus.png) 

Here is a screenshot of an online text editor:

![Screenshot of ShiftEdit](shiftedit.png)

### Uploading files on the Web

When your website is ready for public viewing, you'll have to upload your webpages to your web server. You can buy space on a server from various providers (see [How much does it cost to do something on the web?](/en-US/docs/Learn/Common_questions/How_much_does_it_cost)). Once you settle on which provider to use, the provider will email you the access information, usually in the form of an SFTP URL, username, password, and other information needed to connect to their server. Bear in mind that (S)FTP is now somewhat old-fashioned, and other uploading systems are starting to become popular, such as [RSync](https://en.wikipedia.org/wiki/Rsync) and [Git/GitHub](https://help.github.com/articles/using-a-custom-domain-with-github-pages/).

**Note:** FTP is inherently insecure. You should make sure your hosting provider allows use of a secure connection, e.g. SFTP or RSync over SSH.

Uploading files to a web server is a very important step while creating a website, so we cover it in detail in [a separate article](/en-US/docs/Learn/Common_questions/Upload_files_to_a_web_server). For now, here's a short list of free basic (S)FTP clients:

Operating system

 FTP software

Windows

-   [WinSCP](https://winscp.net)
-   [Moba Xterm](https://mobaxterm.mobatek.net/)

<!-- -->

-   [FileZilla](https://filezilla-project.org/) (All OS)

Linux

-   [Nautilus/Files](https://wiki.gnome.org/action/show/Apps/Files?action=show&redirect=Apps%2FNautilus) (Gnome)
-   [Dolphin](https://dolphin.com/) (KDE)

Mac OS

-   [Cyberduck](https://cyberduck.de/)

Chrome OS

-   [ShiftEdit](https://shiftedit.net/) (All OS)

### Browsing websites

As you already know, you need a web browser to view websites. There are [dozens](https://en.wikipedia.org/wiki/List_of_web_browsers) of browser options for your personal use, but when you're developing a website you should test it at least with the following major browsers, to make sure your site works for most people:

-   [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
-   [Google Chrome](https://www.google.com/chrome/)
-   [Microsoft Internet Explorer](https://windows.microsoft.com/en-US/internet-explorer/download-ie)
-   [Apple Safari](https://www.apple.com/safari/)

If you're targeting a specific group (e.g., technical platform or country), you may have to test the site with additional browsers, like [Opera](https://www.opera.com/), [Konqueror](https://www.konqueror.org/), or [UC Browser](https://www.ucweb.com/ucbrowser/).

But testing gets complicated because some browsers only run on certain operating systems. Apple Safari runs on iOS and Mac OS, while Internet Explorer runs only on Windows. It's best to take advantage of services like [Browsershots](http://browsershots.org/) or [Browserstack](https://www.browserstack.com/). Browsershots furnishes screenshots of your website as it will look in various browsers. Browserstack actually gives you full remote access to virtual machines so you can test your site in the most common environments. Alternatively, you can set up your own virtual machine, but that takes some expertise. (If you're going that route, Microsoft has some tools for developers including a ready-to-use virtual machine at [modern.ie](https://modern.ie).)

By all means run some tests on a real device, especially on real mobile devices. Mobile device simulation is a new, evolving technology and less reliable than desktop simulation. Mobile devices cost money, of course, so we suggest taking a look at the [Open Device Lab initiative](https://opendevicelab.com/). You can also share devices if you want to test on many platforms without spending too much.

Next steps
----------

-   Some of this software is free, but not all of it. [Find out how much it costs to do something on the web](/en-US/docs/Learn/Common_questions/How_much_does_it_cost).
-   If you'd like to learn more about text editors, read our article about [how to choose and install a text editor](/en-US/docs/Learn/Common_questions/Available_text_editors).
-   If you're wondering how to publish your website on the web, look at ["How to upload files to a web server"](/en-US/docs/Learn/Common_questions/Upload_files_to_a_web_server).
