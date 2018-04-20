// Global unit conversion function. This gets set when a new document is created with makeDocument().
var convertToUnits;
var convertFromUnits;

function makeDocument(width, height, units) {
  var w, h;
  
  var docPreset = new DocumentPreset();
  
  switch(units) {
    case "MM":
        convertToUnits = getToUnitConversion("MM");
        convertFromUnits = getFromUnitConversion("MM");
        w = convertToUnits(width);
        h = convertToUnits(height);
        docPreset.units = RulerUnits.Millimeters;
        break;
    case "IN":
        convertToUnits = getToUnitConversion("IN");
        convertFromUnits = getFromUnitConversion("IN");
        w = convertToUnits(width);
        h = convertToUnits(height);
        docPreset.units = RulerUnits.Inches;
        break;
    case "CM":
        convertToUnits = getToUnitConversion("CM");
        convertFromUnits = getFromUnitConversion("CM");
        w = convertToUnits(width);
        h = convertToUnits(height);
        docPreset.units = RulerUnits.Centimeters;
        break;
    default:
        convertToUnits = getToUnitConversion();
        convertFromUnits = getFromUnitConversion();
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

// convert from pts to units
function getToUnitConversion(u) {
  
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

// convert from units to pts
function getFromUnitConversion(u) {
  
  if(u == "IN") {
    return function(v) {
      return v/PTS_IN;
    };
  } else if(u == "MM") {
    return function(v) {
      return v/PTS_MM;
    };
  } else if(u == "CM") {
    return function(v) {
      return v/PTS_CM;
    };
  } else {
    // return pts pass through
    return function(v) {
      return v;
    };
  }
}

// setup color for Preferences > Guides & Grid > Grid
function setGridColors(rDark, gDark, bDark, rLite, gLite, bLite) {
  app.preferences.setRealPreference('Grid/Color/Dark/r', rDark); // Color > Custom
  app.preferences.setRealPreference('Grid/Color/Dark/g', gDark); // Color > Custom
  app.preferences.setRealPreference('Grid/Color/Dark/b', bDark); // Color > Custom
  app.preferences.setRealPreference('Grid/Color/Lite/r', rLite); // Color > Custom
  app.preferences.setRealPreference('Grid/Color/Lite/g', gLite); // Color > Custom
  app.preferences.setRealPreference('Grid/Color/Lite/b', bLite); // Color > Custom
}

// setup grid for Preferences > Guides & Grid > Grid
function setupGrid(hSpacing, vSpacing, hSubdiv, vSubdiv) {
  app.preferences.setRealPreference('Grid/Horizontal/Spacing', hSpacing); // Gridline every
  app.preferences.setRealPreference('Grid/Vertical/Spacing', vSpacing); // Gridline every
  app.preferences.setIntegerPreference('Grid/Horizontal/Ticks', hSubdiv); // Subdivisions
  app.preferences.setIntegerPreference('Grid/Vertical/Ticks', vSubdiv); // Subdivisions
}