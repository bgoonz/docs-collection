--- title: Visual-js game engine slug: Games/Visual-js_game_engine tags: - HTML5 - JavaScript - Tools - game engine - visual-js ---

{{GamesSidebar}}

## Full name : Visual-js GUI for windows _Multiplatform 2d Game engine_

creator: Nikola Lukic 2017

2018 open source

### Visual-js project parts:

#### -2D PART :   This is JavaScript game engine  (server part node.js / client part js) Js framework with windows GUI editor and game instance creator. ( + server engine tools + server part of web apps )

#### -3D PART: webgl based on three.js engine

#### -3D PART: webGL2 based on glmatrix 2.0

#### -2D PART (new):   This is TypeScript based game engine  (client part ts). With strong connection with webpack Physics done with (matter.js) matter ts

This part is removed from this project. New link is: https://github.com/zlatnaspirala/visual-ts-game-engine

### Basic license rules:

1. Each file in this project has its own license, be careful, do not violate the basic rules.

2. You are free to use any version of Visual JS library in any other project (even commercial projects)  
      as long as the copyright header is left intact Except for plugins on sale and graphics that come with  
      them (they have special commercial license).
3. Please read the following terms and conditions before using this application:  
      **_Disclaimer of warranty_**  
         'Visual js' is provided "as-is" and without warranty of any kind, express, implied or otherwise,  
         including without limitation, any warranty of merchantability or fitness for a particular purpose.    
         In no event shall the author of this software be held liable for data loss,  
         damages, loss of profits or any other kind of loss while using or misusing this software.

**External licenses in this project:**

- Webcam NUI control is under: Created by Romuald Quantin. [http://creativecommons.org/licenses/by-nc-sa/3.0/](https://creativecommons.org/licenses/by-nc-sa/3.0/)

  Download from: <https://www.adobe.com/devnet/archive/html5/articles/javascript-motion-detection.html>

- WEBRTC - webcam communication is under:  
  Creator Muaz Khan

  [www.MuazKhan.com](http://www.muazkhan.com/) MIT License - [www.WebRTC-Experiment.com/licence](https://www.webrtc-experiment.com/licence)

- Socket.io.js - [http://socket.io/download/](https://socket.io/download/) ( also implemented intro build.js )

- webgl2 based on: Copyright (C) 2014 Tappali Ekanathan Keestu (<keestu@gmail.com>) GNU General Public License

- OBJ loader: <https://github.com/frenchtoast747/webgl-obj-loader>

- Textures download from [http://textures.com](https://textures.com/)

- More texture downloads <http://www.textures4photoshop.com/>

- Female Body v3.blend this file has been released by AndresCuccaro under the following license: Creative Commons Attribution 3.0

### About GUI for windows (canvas2d part only):

_windows GUI application version 1.0 (using visual-js 0.9 lib)  
Important: you will need NET 4.5.2 minimum also redistribution pack for c++_

How to start project ?

1. Click CREATE APPLICATION
2. Enter new application name in input prompt
3. Select folder for server part of application (important: www is not secure place)
4. Select folder for client part of application ( any path in www)
5. New app name will appear in project list, select and click OPEN APPLICATION

6. Open your server folder:

Install node.js modules

One way - Use windows **bat**-s file (in server root folder with prefix install\_ )

Second way - open **_cmd _**terminal and enter next command:

- npm install mysql
- npm install delivery
- npm install express
- npm install mkdirp
- npm install socket.io
- npm install nodemailer@0.7.0

Very easy installation and project files generator.

Now you can use **_On-Page-Editor_** (nice for visual setup, checking positions and dimensions - not for logic). Manual start from cmd: server_folder/node editor.js

After starting On-Page-Editor open browser icon to open internet browser in editor mode. See video explanation:

{{EmbedYouTube("MVp-JsAha94")}}

If you use editor.js to visual create game object method, you must start \*\*\*node build_from_editor_to_visual_js_file.js\*\*\* on the end of work.  
This tool will create visual.js in folder starter/ with all your game object was created in editor style.

or you can use \*Visual-JS Source editor**.\***

### **_Visual-JS Source editor  (2d part only)_**

is new and better way. In future visual staff will be better (real time simulator will be implemented).For now this place is good for coding.

Visual-js works direct with project files, no need for build.

{{EmbedYouTube("kxUBPDhB-3I")}}

Add-&gt;New game object (_form dialog for define type of new game object _)  
Add-&gt;Quick code (_make your work faster - add usually code blocks)_  
Resources - explorer view for images and audios, you can drag or edit also need to execute node build_resources for creating resources object for engine.  
Inserting new code will be always at current line selected intro editor.  
Save on drop menu or better with ctrl+s before testing in browsers.

**Adding new script explanation:**

After adding new script and save script if you have extra changes, open starter/run.js and you will found line:

    SYS.SCRIPT.LOAD("scripts/new_script.js")

Ctrl+S

Use from menu **Run**-&gt;Choose browser for testing. Important: Safari not working at the moment

Chrome, Firefox, Opera

### **_Tutorial - Pencil (Animation path) : _**

How to use **Pencil tool** to create PATH object. Path object can be saved intro localhost, you can collect object and put it direct source code.

File location: starter/templates/paths.js Templates are made from visual-js core also. See source code: [paths.js](https://bitbucket.org/nikola_l/visual-js/src/93027dcab76972c6a6432431e1a3341c0e231d61/project/program_instance/starter/templates/paths.js?at=master&fileviewer=file-view-default)

{{EmbedYouTube("Y-B-PA5U6KQ")}}

See the Pen [Visual js - Pencil](https://codepen.io/zlatnaspirala/pen/jrzNko/) by VisualJS game engine ([@zlatnaspirala](https://codepen.io/zlatnaspirala)) on [CodePen](https://codepen.io).

**Online demo examples at:**

<https://jsfiddle.net/user/zlatnaspirala/fiddles/>

**Demo slot machine** basic demo at:

<https://jsfiddle.net/zlatnaspirala/7d0d8v6d/>

### Help about new 2d part - implementation of matter.js based typescript.

I make strong relation with webpack and project. Build folder is full vendor nature. Html css and resources come from dependency logic taken from source.

To make all dependency works in build process we need some plugins.

**Features:**

Tile's background draw for images (alias sprite - but for now there's no sprite and frame by frame animation methods).

Small engine config.

Some option in aspect view like

`npm install ...`

`npm install typescript npm i clean-webpack-plugin --save-dev npm i html-webpack-plugin --save-dev`

`Possible fix:`

`npm i webpack --save-dev npm i extract-text-webpack-plugin --save-dev Fix code format:`

`tslint -c tslint.json 'src/**/*.ts' --fix`

**Download project link:**

[Download link from BitBucket.](https://bitbucket.org/nikola_l/visual-js)
