#include "../lib/color.js"
#include "../lib/files.js"
//#include "../lib/utils.js"

// define the document width (in points)
var width = 100;

// define the document height (in points)
var height = 100;

// create a new document
var doc = app.documents.add(DocumentColorSpace.RGB, width, height);

// shift origin
doc.rulerOrigin = [0,height];

// add to existing layer
var layer = doc.layers[0];

// coordinates (in points)
var y = 0;
var x = 0;
var w = 10;
var h = 10;

// draw rectangle
var rect = layer.pathItems.rectangle(-y, x, w, h);
rect.fillColor = makeColorRGB(0,0,255);
rect.stroked = false;

// draw rounded rectangle
var roundRect = layer.pathItems.roundedRectangle(-y, x + 10, w, h, 1, 1, false);
roundRect.fillColor = makeColorRGB(255,0,0);
roundRect.stroked = false;

// draw ellipse
var ellipse = layer.pathItems.ellipse(-y, x + 20, w, h);
ellipse.fillColor = makeColorRGB(0, 255, 0);
ellipse.stroked = false;

// specify output dir and filename
var dirName = "test";
var fileName = "output";
//var fileName = "output-" + dateTimeStr(); // utils.js include required

// make a new directory if needed
var dir = new Folder('~/Desktop/' + dirName);
if (!dir.exists) {
  dir.create();
}

// save ai file
saveAI(dir + "/" + fileName + ".ai"); // default
saveAI(dir + "/" + fileName + "-cc" + ".ai", "CC");
saveAI(dir + "/" + fileName + "-cs6" + ".ai", "CS6");
saveAI(dir + "/" + fileName + "-cs2" + ".ai", "CS2");
// saveAI("~/Desktop/output-cc.ai", "CC");
// saveAI("~/Desktop/output-cs6.ai", "CS6");
// saveAI("~/Desktop/output-cs2.ai", "CS2");

// save pdf file
savePDF(dir + "/" + fileName + ".pdf"); // default

// save eps file
saveEPS(dir + "/" + fileName + ".eps"); // default
//saveEPS(dir + "/" + fileName + "-cc" + ".eps", "CC");
//saveEPS(dir + "/" + fileName + "-cs6" + ".eps", "CS6");
//saveEPS(dir + "/" + fileName + "-cs2" + ".eps", "CS2");
// saveEPS("~/Desktop/output-cc.eps", "CC");
// saveEPS("~/Desktop/output-cs6.eps", "CS6");
// saveEPS("~/Desktop/output-cs2.eps", "CS2");

// save jpg
saveJPG(dir + "/" + fileName + ".jpg"); // default
saveJPG(dir + "/" + fileName + "-2x" + ".jpg", 2); // scaled by 2
saveJPG(dir + "/" + fileName + "-4x" + ".jpg", 4); // scaled by 4
// saveJPG("~/Desktop/output-2x.jpg", 2); // scaled by 2
//saveJPG("~/Desktop/output-4x.jpg", 4); // scaled by 4

// save png
savePNG(dir + "/" + fileName + ".png", 1, false); // default
savePNG(dir + "/" + fileName + "-2x" + ".png", 2, false); // scaled by 2
savePNG(dir + "/" + fileName + "-4x" + ".png", 4, false); // scaled by 4

// save svg
saveSVG(dir + "/" + fileName + ".svg"); // default

