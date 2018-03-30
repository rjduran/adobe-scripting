// define the document width (in points)
var width = 100;

// define the document height (in points)
var height = 100;

var presets = app.startupPresetsList;

/*
  To get list of presets:
  var presets = app.startupPresetsList;
  $.writeln(presets);
  Returns: Art & Illustration,Basic RGB,Devices,Film and Video,Mobile,Print,Video and Film,Web
*/

var preset = presets[0];

var docPreset = new DocumentPreset();
docPreset.title = "MyNewDocument"; // Untitled by default
docPreset.width = width;
docPreset.height = height;
docPreset.colorMode = DocumentColorSpace.RGB;

// create a new document
var doc = app.documents.addDocument(preset, docPreset,false);

// insert drawing code here