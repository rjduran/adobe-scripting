# adobe-scripting

This guide walks through the process of getting started writing scripts in Javascript for use in [Adobe Illustrator CC](https://www.adobe.com/products/illustrator.html).

This tutorial was written using Adobe Illustrator CC (2017) running on macOS (10.12).

## Table of Contents

* [Setup Development Environment](#setup-development-environment)
    * [Install and Setup ExtendScript Toolkit CC](#install-and-setup-extendscript-toolkit-cc)
    * [Install and Setup Atom IDE Based Workflow](#install-and-setup-atom-ide-based-workflow)
* [Getting Started](#getting-started)
    * [Introduction](#introduction)
    * [Understanding the Adobe Documentation](#understanding-the-adobe-documentation)
    * [Setup Development Environment](#setup-development-environment)
    * [Understanding the Document](#understanding-the-document)
    * [Preprocessor Directives](#preprocessor-directives)
    * [Hello World](#hello-world)
    * [Debugging](#debugging)
* [References](#references)

## Setup Development Environment

There are two ways to write scripts for Adobe Illustrator: 1) Use the ExtendScript Toolkit.app or 2) Use a text editor and custom workflow (ie. Atom). Both workflows are described below.

**Recommendation**: If you are new to scripting or coding in general, I suggest starting with the standard _Extendscript Toolkit.app_ to get familiar with the language, syntax, and DOM before moving onto a different editor and workflow (ie. Atom).

Pro Tip: As you become experienced you may find that its beneficial to use both IDEs at times since (in my opinion) Atom is much nicer to look at and use and ExtendScript Toolkit has a built in Data Browser for learning the API and a JavaScript Console for debugging.

### Install and Setup Extendscript Toolkit CC

![](img/extendscript-setup.png)

1. Launch Adobe CC and look for "Extendscript Toolkit CC" in the list of available applications. If it isn't shown in the list goto Preferences > Creative Cloud > Check "Show Older Apps" to reveal it in the list of available applications. If needed, the direct download link can be found [here](https://helpx.adobe.com/creative-cloud/kb/creative-cloud-apps-download.html).
2. Click Install
3. After installing the toolkit you should see a folder called "Adobe ExtendScript Toolkit CC" under Applications. Locate the folder and launch "ExtendScript Toolkit.app".
4. Set the Target application to "Adobe Illustrator CC 2017". If Illustrator is not open, open it and click the small broken red "chain link" icon in the scripting application to change it green and connect to Illustrator. If Illustrator closes the chain link icon will change back to a broken red link.
5. (Optional) The default settings are much to small for a Macbook Pro with Retina Screen on the highest resolution setting. Change the font to 'Consolas' or 'Monaco' and font size to '16'.

At this point you are ready to write scripts!

### Install and Setup Atom IDE Based Workflow

![](img/atom-setup.png)

1. Install [Atom IDE](http://atom.io/)
1. Install [process-palette](https://atom.io/packages/process-palette) atom package.
2. Add a new global command to the process-palette.json file by going to the package setup options and adding the following.
    * Give it a namespace of "ai"
    * An action name of "run-current-script"
    * A keystroke of "cmd-ctrl-r" (You can set this to anything you want)
    * A shell command of `osascript -e 'tell application "Adobe Illustrator"' -e 'activate' -e 'do javascript "#include '{fileAbsPath}'"' -e 'end tell'`    
3. Load a new .jsx file and run it via "cmd + ctrl + r" or by right clicking on the file in the sidebar and choosing "Run With" > Run Current Script.
4. Make sure Adobe Illustrator is open and you should see the results when running the script.

At this point you are ready to write scripts!


## Getting Started

### Introduction

This guide is written with the intention of providing an entry point into learning how to write scripts for use in Adobe Illustrator CC. It assumes some experience with programming fundamentals and JavaScript. If you are familiar with a programming language such as python, C/C++, or Java it should be fairly straightforward to follow along.

The content is oriented towards visual design and writing code that results in visual and graphical elements. If you are familiar with creative coding IDE's such as Processing or Open Frameworks, it should feel familiar in the iterative "write - run ... repeat" workflow, meaning you write some code, run it, see the result in Illustrator, and repeat the process. To facilitate this kind of workflow I recommend using Atom IDE as opposed to the ExtendScript Toolkit Application.

### Understanding the Adobe Documentation

There are several official Adobe documents that act as good references for learning scripting. I suggest reading through them in the following order to grasp fundamental concepts and to learn which references are relevant to the task at hand.

* [Adobe Illustrator Scripting References](https://www.adobe.com/devnet/illustrator/scripting.html) - All Official Documentation (Login Required)
* [Adobe Illustrator Scripting Guide](https://wwwimages2.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/AI_ScriptGd_2017.pdf) - Read First
    * Chapter 2: The Illustrator Scripting Object Model
    * Chapter 3: Scripting Illustrator
    * Chapter 5: Scripting with JavaScript
* [Adobe Illustrator Scripting Reference: Javascript](https://wwwimages2.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/Illustrator_JavaScript_Scripting_Reference_2017.pdf) - Reference as needed
* JavaScript Tools Guide CC (PDF located under _Applications/ExtendScript Toolkit CC/SDK_) / [Online Version](http://estk.aenhancers.com/)
    * Chapter 7: Integrating External Libraries

### Setup Development Environment

In general, you want to [Setup Atom](#install-and-setup-atom-ide-based-workflow) (one time) and make a new Illustrator document. It is possible to generate new documents using the `app.documents.add()` function. We will cover more of this method later.

* Setup Atom to be your primary editor. Trust me, it just works better.
* Open Up Illustrator
  * Create an Illustrator file with mm as the default units.
      * New Document > Width: 100, Height: 100, Millimeters, RGB Color > Create
  * Setup Grid & Rulers    
      * Preferences > Guides & Grid > Gridline every: 1 mm, Subdivisions: 1
      * Show Grid (View Menu or CMD + ')
      * Show Ruler (View Menu > Rulers or CMD + r)
* Open Up Atom
  * Make a new directory called "scripts".
  * Make a new file called "script.jsx" in your scripts folder. This and other scripts will be used for writing code and running from within Atom via the process-palette package you setup previously.

At this point you should have an empty document in Illustrator with 1 empty layer and a project folder to store scripts in.
    
### Understanding the Document

The most basic scripts consist of drawing paths (and shapes) on layers within a document. To do this there needs to be a reference to an active document and at least one layer within the document. The code below provides a boilerplate to get a reference to the active document and the first (and only) layer in the document.

```javascript
// get the active document
var doc = app.activeDocument;

// get reference to layer 1
var layer = doc.layers[0];
```

Any code entered in a script following these references will have access to the `doc` or `layer` objects.

### Preprocessor Directives

Preprocessor directives are a way to include external scripts. At a basic level, the first line of a script might have a directive as show below. This directive includes any code written in the file lib.js, bringing it into my script. Why use this? Over time your code might get complex, making it hard to read. Using additional files will allow you to modularize, simplify, reuse, and streamline your code. To learn more about their use look at the JavaScript Tools Guide (pdf) located under _Applications/ExtendScript Toolkit CC/SDK_.
```javascript
#include "lib.js"
```

For the moment we won't worry about preprocessor directives. We will make use of them later in the guide.

### Hello World

This example will insert the text "Hello World" at the position (0,0) in the artboard. The position that an object is inserted into the artboard is dependent on the artboard coordinates. When you make a new document using the Illustrator New Document window, the artboard will default to a position of (0,0). This is not always the case when _generating_ an artboard using a script. We will explore why this is next.

1. Create an Illustrator file with mm as the default units. Set the document size to 100 mm x 100 mm and RGB Color. As mentioned previously, its really nice to be able to see the grid while learning about positioning and inserting objects to the artboard. Setup the grid by going to Preferences > Guides & Grid > Gridline every: 1 mm, Subdivisions: 1.

2. Create a script called hello-world.jsx and insert the following code.

    ```javascript
    // get the active document
    var doc = app.activeDocument;

    // get reference to layer 1
    var layer = doc.layers[0];

    // create new text frame and add it to the layer
    var text = layer.textFrames.add();

    // contents and position of text frame    
    text.contents = "Hello World";
    text.position = [0,0];
    ```

3. Run the code using Process Palette to see the result in Illustrator. The text was placed in the top left corner at (0,0).

![](img/01-hello-world.png)

### Debugging

The `$.writeln()` function - This is similar to `println()` in Processing or `console.log()` in standard JavaScript and be really useful for debugging. The only caveat is it only works in the ExtendScript Toolkit IDE and will print to the JavaScript Console within the IDE. I have not found a solution for printing debug messages to the console in Atom yet.
```javascript
$.writeln("Foo Goo!");
```

Data Browser - This window within the ExtendScript Toolkit IDE is shows the namespace and all the objects, variables, and methods available. It is only available within the ExtendScript Toolkit IDE and only updates when running a script. In general the typical use case involves a document and/or layer so I usually start off inspecting an active document using the following script.
```javascript
var doc = app.activeDocument;
var layer = doc.layers[0];
```



## References

Illustrator Scripting

* [Adobe Illustrator CC 2017 Scripting References](https://www.adobe.com/devnet/illustrator/scripting.html)
* [Adobe Illustrator CC 2017 Scripting Guide](https://wwwimages2.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/AI_ScriptGd_2017.pdf) (pdf)
    * Chapter 5: Scripting with JavaScript
* [Adobe Illustrator CC 2017 Scripting Reference: Javascript](https://wwwimages2.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/Illustrator_JavaScript_Scripting_Reference_2017.pdf) (pdf)
* ExtendScript Toolkit ReadMe.pdf (Found under Applications/Adobe ExtendScript Toolkit CC)
* [Adobe Illustrator Scripting Forum](https://forums.adobe.com/community/illustrator/illustrator_scripting)
* [Illustrator Object Model](http://cssdk.s3-website-us-east-1.amazonaws.com/sdk/1.0/docs/WebHelp/app_notes/AI_obj_model.htm) aka DOM
* [Graphic Design Stack Exchange](https://graphicdesign.stackexchange.com/tags/illustrator-scripting/hot)
* Sample Code
    * Found under Applications/Adobe Illustrator CC/Scripting/Sample Scripts/JavaScript
* Tutorials
    * [scripting-for-illustrator-tutorial](https://github.com/jtnimoy/scripting-for-illustrator-tutorial) by Josh Nimoy ([jtnimoy](https://github.com/jtnimoy))
    * [Use AppleScript to perform batch actions in Illustrator](https://gielberkers.com/use-applescript-batch-actions-illustrator/)
* Tools
    * [Adobe CC Scripts Panel](https://github.com/majman/adobe-scripts-panel)

UI Scripting

* JavaScript Tools Guide CC (Found under Applications/ExtendScript Toolkit CC/SDK)
* [JavaScript Tools Guide (Online)](http://estk.aenhancers.com/) - A great reference on other topics such as UI Tools, Interapplication Communication, etc
* [Jongware ScriptUI](http://jongware.mit.edu/scriptuihtml/Sui/index_1.html)
* [Jongware Illustrator (CS6)](http://jongware.mit.edu/iljscs6html/iljscs6/)
* [Peter Kahrel's ScriptUI for Dummies](http://www.kahrel.plus.com/indesign/scriptui.html)
* Sample Code
    * ScriptUI Samples (Found under Applications/ExtendScript Toolkit CC/SDK/Samples)

Atom IDE Based Workflow

* [process-palette](https://atom.io/packages/process-palette) atom package
* Apple Scripting
    * [Apple Scripting](https://developer.apple.com/library/content/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html)
    * [Creating a Script](https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/CreateaScript.html#//apple_ref/doc/uid/TP40016239-CH12-SW1)
    * [The Ultimate Beginner's Guide To AppleScript](https://computers.tutsplus.com/tutorials/the-ultimate-beginners-guide-to-applescript--mac-3436)
* osascript
    * [osascript manual](https://ss64.com/osx/osascript.html)
    * [Run AppleScript from the Command Line in Mac OS X with osascript](http://osxdaily.com/2016/08/19/run-applescript-command-line-macos-osascript/)













