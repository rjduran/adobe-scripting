function makeDocument(width, height, units) {
  var w, h;
  
  var docPreset = new DocumentPreset();
  
  switch(units) {
    case "MM":
        w = pts2mm(width);
        h = pts2mm(height);
        docPreset.units = RulerUnits.Millimeters;
        break;
    case "IN":
        w = pts2in(width);
        h = pts2in(height);
        docPreset.units = RulerUnits.Inches;
        break;
    case "CM":
        w = pts2cm(width);
        h = pts2cm(height);
        docPreset.units = RulerUnits.Centimeters;
        break;
    default:
        w = pts2mm(width);
        h = pts2mm(height);
        docPreset.units = RulerUnits.Millimeters;
  }
          
  var presets = app.startupPresetsList;
  var preset = presets[0]; // Default: Art & Illustration
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