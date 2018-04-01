// Illustrator Versions
// ILLUSTRATOR8 : 8
// ILLUSTRATOR9 : 9
// ILLUSTRATOR10 : 10
// ILLUSTRATOR11 : CS
// ILLUSTRATOR12 : CS2
// ILLUSTRATOR13 : CS3
// ILLUSTRATOR14 : CS4
// ILLUSTRATOR15 : CS5
// ILLUSTRATOR16 : CS6
// ILLUSTRATOR17 : CC // default

// PDF Acrobat Versions
// ACROBAT4
// ACROBAT5
// ACROBAT6 // default
// ACROBAT7
// ACROBAT8

function saveEPS (dest, version) {
  var doc = app.activeDocument;
  if(app.documents.length > 0) {
    var f = new File(dest);
    saveOpts =new EPSSaveOptions();
    saveOpts.cmykPostScript = false;
    switch(version) {
      case "CC":
          saveOpts.compatibility = Compatibility.ILLUSTRATOR17;
          break;
      case "CS6":
          saveOpts.compatibility = Compatibility.ILLUSTRATOR16;
          break;
      case "CS5":
          saveOpts.compatibility = Compatibility.ILLUSTRATOR15;
          break;
      case "CS2":
          saveOpts.compatibility = Compatibility.ILLUSTRATOR12;
          break;
      default:
          saveOpts.compatibility = Compatibility.ILLUSTRATOR17;
    }
    doc.saveAs(f, saveOpts);
  }
}

function saveAI (dest, version) {
  if(app.documents.length > 0) {
    var saveOpts = new IllustratorSaveOptions();
    var f = new File(dest);
    switch(version) {
      case "CC":
          saveOpts.compatibility = Compatibility.ILLUSTRATOR17;
          break;
      case "CS6":
          saveOpts.compatibility = Compatibility.ILLUSTRATOR16;
          break;
      case "CS5":
          saveOpts.compatibility = Compatibility.ILLUSTRATOR15;
          break;
      case "CS2":
          saveOpts.compatibility = Compatibility.ILLUSTRATOR12;
          break;
      default:
          saveOpts.compatibility = Compatibility.ILLUSTRATOR17;
    }
    app.activeDocument.saveAs(f, saveOpts);
  }
}

function savePDF (dest) {
  var doc = app.activeDocument;
  if(app.documents.length > 0) {
    var f = new File(dest);
    saveOpts =new PDFSaveOptions();
    saveOpts.compatibility = PDFCompatibility.ACROBAT6;
    saveOpts.generateThumbnails = true;
    saveOpts.preseveEditability = true;
    doc.saveAs(f, saveOpts);
      
  }
}

function saveJPG (dest, scale) {
  var doc = app.activeDocument;
  if(app.documents.length > 0) {
    var f = new File(dest);
    saveOpts =new ExportOptionsJPEG();
    saveOpts.artBoardClipping = true;
    saveOpts.qualitySetting = 70;
    if(scale) {
      saveOpts.horizontalScale = 100*scale;
      saveOpts.verticalScale = 100*scale;
    }
    doc.exportFile(f, ExportType.JPEG, saveOpts);
  }
}

function savePNG (dest, scale, transparency) {
  var doc = app.activeDocument;
  if(app.documents.length > 0) {
    var f = new File(dest);
    saveOpts =new ExportOptionsPNG24();
    saveOpts.antiAliasing = true;
    saveOpts.transparency = transparency; //  true or false
    saveOpts.artBoardClipping = true;
    if(scale) {
      saveOpts.horizontalScale = 100*scale;
      saveOpts.verticalScale = 100*scale;
    }
    doc.exportFile(f, ExportType.PNG24, saveOpts);
  }
}

function saveSVG (dest) {
  var doc = app.activeDocument;
  if(app.documents.length > 0) {
    var f = new File(dest);
    saveOpts =new ExportOptionsSVG();
    doc.exportFile(f, ExportType.SVG, saveOpts);
  }
}




