--- title: Visual JS GE slug: Games/Visual\_JS\_GE tags: - Canvas - JavaScript - Server - game engine ---

{{GamesSidebar}}

<span class="seoSummary">**Visual-js **GameEngine is a small but comprehensive canvas/websocket-based game engine with GUI source editor only for Windows. The server is based on Node.js vs MySql, the client made in four variant on a JavaScript frameworks for 2d canvas JS , three.js , webGL2 vs glmatrix and 2d canvas with matter.js in typescript to complete the stack.</span>

Installation and setup
----------------------

First of all download Visual-js from [bitbucket](https://bitbucket.org/nikola_l/visual-js/). Extract the package into your root folder.

### Installing modules

Navigate to `server_instance/`, then in the Node.js command prompt or console enter the following installation commands:

    npm install mysql
    npm install delivery
    npm install express
    npm install mkdirp
    npm install socket.io
    npm install nodemailer@0.7.0

### Setting up config.js

You will find `config.js` in the `server_instance` folder: All Node.js applications use the same folder — `server_instance`. Some apps might need to have local storage, for instance, `editor.js`. You need to edit the config file to include the correct paths to the node app and project instance, as indicated below:

    module.exports = {

       VERSION : "0.5",
       PATH_OF_NODE_APP : "D:/PATH_TO_SERVER_INSTANCE_FOLDER/server/" ,  // EDIT HERE
       PATH_OF_WWW : "D:/xamp/htdocs/project_instance/", // PATH_TO_WWW  EDIT HERE
       EDITOR_PORT : "1013",
       REG_PATH : "users/",
       ACCOUNT_PORT  : 3666 ,
       DESTROY_SESSION_AFTER_X_mSECONDS : 20000,

    };

local node.js application tools (uses in developer mode only)
-------------------------------------------------------------

The following section provides information about the tools involved in Visual-JS game engine.

### In page editor 

Found at `server_instance/editor.js`.

### build\_from\_editor\_to\_visual\_js

Found at `server_instance/build_from_editor_to_visual_js_file.js`. This is a Node.js app for local use.

If you use `editor.js` to visually create game objects, you must start the `build_from_editor_to_visual_js_file.js` when you have finished. This tool will create `visual.js` in the `starter/` directory along with all your game objects.

It takes data from the system folder `lib/visual_scripts/` and generates your code.

{{EmbedYouTube("MVp-JsAha94")}}

### RESOURCE JS objects

Used for adding images for animation purposes.

1.  This is done using `server_instance/res.js`. You need to put your images in a folder, for example `TEST_RES/` , inside `project_instance/res/`.
2.  Next, run the command `server_instance/node res.js`.
3.  After this has finished processing, restart the web page by entering the following in the console:  `RESOURCE.TEST_RES`.

RESOURCE objects contain the path data for all your images. The actual image objects will be created after you add animation to the game objects. This is good because it is memory safe.

### VISUAL JS.exe Windows GUI freeware 

Only for Windows users. Contains the following tools.

-   <span id="Visual_JS.exe_Version_1.0_comes_with_source_editor_.">Visual\_JS.exe Version 1.0 — comes with source editor.</span>
-   <span id="ML_SYS.exe_-_Multilanguage_tool_for_string_Labels_._(Smart_xml_operation_-_No_empty_tags_)">ML\_SYS.exe — Multilanguage tool for string labels (smart XML operation; no empty tags).</span>
-   <span id="CriptingJS.exe_-_Based_on_javascriptobfuscator.com_API">ScriptingJS.exe — Based on javascriptobfuscator.com API.</span>
-   <span id="MakeLib.exe_-_Need_fot_bug_fixing">MakeLib.exe — Needed for font bug fixing.</span>

Video tutorials
---------------

{{EmbedYouTube("kxUBPDhB-3I")}}

Pencil component

{{EmbedYouTube("Y-B-PA5U6KQ")}}

Particle

{{EmbedYouTube("Wh1BtCbZH1A")}}

Virtual keyboard

{{EmbedYouTube("Hy833-hOxS4")}}
