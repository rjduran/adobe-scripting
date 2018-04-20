// Global unit conversion function. This gets set when a new document is created with makeDocument().
var convertUnits;

function makeDocument(width, height, units) {
  var w, h;
  
  var docPreset = new DocumentPreset();
  
  switch(units) {
    case "MM":
        convertUnits = getUnitConversion("MM");
        w = convertUnits(width);
        h = convertUnits(height);
        docPreset.units = RulerUnits.Millimeters;
        break;
    case "IN":
        convertUnits = getUnitConversion("IN");
        w = convertUnits(width);
        h = convertUnits(height);
        docPreset.units = RulerUnits.Inches;
        break;
    case "CM":
        convertUnits = getUnitConversion("CM");
        w = convertUnits(width);
        h = convertUnits(height);
        docPreset.units = RulerUnits.Centimeters;
        break;
    default:
        w = width;
        h = height;
  }
          
  var presets = app.startupPresetsList;
  var preset = presets[0]; // Default: Art & Illustration (Doesn't really matter but addDoocument needs it)
  //docPreset.title = "MyNewDocument"; // Untitled by default
  docPreset.width = w;
  docPreset.height = h;
  docPreset.colorMode = DocumentColorSpace.RGB;

  // create a new document
  var doc = app.documents.addDocument(preset, docPreset, false);

  // shift origin
  doc.rulerOrigin = [0,h];
  
  return doc;
}

function getUnitConversion(u) {
  
  if(u == "IN") {
    return function(v) {
      return PTS_IN*v;
    };
  } else if(u == "MM") {
    return function(v) {
      return PTS_MM*v;
    };
  } else if(u == "CM") {
    return function(v) {
      return PTS_CM*v;
    };
  } else {
    // return pts pass through
    return function(v) {
      return v;
    };
  }
}