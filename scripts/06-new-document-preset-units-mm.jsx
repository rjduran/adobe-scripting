var PTS_MM = 2.834645;

// define the document width (in mm)
var width = 100 * PTS_MM;

// define the document height (in mm)
var height = 100 * PTS_MM;

var presets = app.startupPresetsList;

/*
  To get list of presets:
  var presets = app.startupPresetsList;
  $.writeln(presets);
  Returns: Art & Illustration,Basic RGB,Devices,Film and Video,Mobile,Print,Video and Film,Web
*/

var preset = presets[0];

var docPreset = new DocumentPreset();
//docPreset.title = "MyNewDocument"; // Untitled by default
docPreset.width = width;
docPreset.height = height;
docPreset.colorMode = DocumentColorSpace.RGB;
docPreset.units = RulerUnits.Millimeters; //  set the ruler units to mm

// create a new document
var doc = app.documents.addDocument(preset, docPreset, false);

// shift origin
doc.rulerOrigin = [0,height];

// insert drawing code here