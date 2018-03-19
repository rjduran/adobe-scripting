# adobe-scripting

This guide walks through the process of getting started writing scripts in Javascript for use in Adobe Illustrator CC (2017).

This tutorial was written for MacOS. There are two ways to write scripts for Adobe Illustrator: 1) Use the ExtendScript Toolkit.app or 2) Use a text editor and custom workflow (ie. Atom). Both workflows are described below.

Recommendation: I suggest starting with the standard **Extendscript Toolkit.app** to get familiar with the language, syntax, and DOM before moving onto a different editor and workflow such as with Atom.

## Install and Setup Extendscript Toolkit CC

1. Launch Adobe CC and look for "Extendscript Toolkit CC" in the list of available applications. If it isn't shown in the list goto Preferences > Creative Cloud > Check "Show Older Apps" to reveal it in the list of available applications. If needed, the direct download link can be found [here](https://helpx.adobe.com/creative-cloud/kb/creative-cloud-apps-download.html).
2. Click Install
3. After installing the toolkit you should see a folder called "Adobe ExtendScript Toolkit CC" under Applications. Locate the folder and launch "ExtendScript Toolkit.app".
4. Set the Target application to "Adobe Illustrator CC 2017". If Illustrator is not open, open it and click the small broken red "chain link" icon in the scripting application to change it green and connect to Illustrator. If Illustrator closes the chain link icon will change back to a broken red link.
5. (Optional) The default settings are much to small for a Macbook Pro with Retina Screen on the highest resolution setting. Change the font to 'Consolas' or 'Monaco' and font size to '16'.

At this point you are ready to write scripts!

## Install and Setup Atom IDE Based Workflow

1. Install Atom IDE
1. Install [process-palette](https://atom.io/packages/process-palette) atom package.
2. Add a new global command to the process-palette.json file by going to the package setup options and adding the following.
    * Give it a namespace of "ai"
    * An action name of "run-current-script"
    * A keystroke of "cmd-ctrl-r" (You can set this to anything you want)
    * A shell command of `osascript -e 'tell application "Adobe Illustrator"' -e 'activate' -e 'do javascript "#include '{fileAbsPath}'"' -e 'end tell'`    
3. Load a new .jsx file and run it via "cmd + ctrl + r" or by right clicking on the file in the sidebar and choosing "Run With" > Run Current Script.
4. Make sure Adobe Illustrator is open and you should see the results when running the script.

At this point you are ready to write scripts!

## References

Illustrator Scripting

* [Adobe Illustrator CC 2017 Scripting](https://www.adobe.com/devnet/illustrator/scripting.html)
* [Adobe Illustrator CC 2017 Scripting Guide](https://wwwimages2.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/AI_ScriptGd_2017.pdf) (pdf)
    * Chapter 5: Scripting with JavaScript
* [Adobe Illustrator CC 2017 Scripting Reference: Javascript](https://wwwimages2.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/Illustrator_JavaScript_Scripting_Reference_2017.pdf) (pdf)
* ExtendScript Toolkit ReadMe.pdf (Found under Applications/Adobe ExtendScript Toolkit CC)
* Tutorials
    * [scripting-for-illustrator-tutorial by jtnimoy](https://github.com/jtnimoy/scripting-for-illustrator-tutorial)
    * [Use AppleScript to perform batch actions in Illustrator](https://gielberkers.com/use-applescript-batch-actions-illustrator/)

UI Scripting

* [JavaScript Tools Guide CC](http://estk.aenhancers.com/) - A great reference on other topics such as UI Tools, Interapplication Communication, etc
* [Jongware ScriptUI](http://jongware.mit.edu/scriptuihtml/Sui/index_1.html)
* [Jongware Illustrator (CS6)](http://jongware.mit.edu/iljscs6html/iljscs6/)
* [Peter Kahrel's ScriptUI for Dummies](http://www.kahrel.plus.com/indesign/scriptui.html)

Atom IDE Based Workflow

* [process-palette](https://atom.io/packages/process-palette) atom package
* Apple Scripting
    * [Apple Scripting](https://developer.apple.com/library/content/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html)
    * [Creating a Script](https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/CreateaScript.html#//apple_ref/doc/uid/TP40016239-CH12-SW1)
    * [The Ultimate Beginner's Guide To AppleScript](https://computers.tutsplus.com/tutorials/the-ultimate-beginners-guide-to-applescript--mac-3436)
* osascript
    * [osascript manual](https://ss64.com/osx/osascript.html)
    * [Run AppleScript from the Command Line in Mac OS X with osascript](http://osxdaily.com/2016/08/19/run-applescript-command-line-macos-osascript/)














