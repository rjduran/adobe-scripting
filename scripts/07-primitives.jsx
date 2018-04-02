#include "../lib/color.js"

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
var ellipse = layer.pathItems.ellipse(-y, x+20, w, h);
ellipse.fillColor = makeColorRGB(0, 255, 0);
ellipse.stroked = false;

// draw line
var p = layer.pathItems.add();
var lineList = new Array([10, -20],[20, -20]);
p.setEntirePath(lineList);
p.filled = false;
p.strokeWidth = 1;
p.strokeColor = makeColorRGB(0,0,255);
  
// draw closed path
var p = layer.pathItems.add();
var lineList = [
  [30, -20],
  [50, -30],
  [40, -15]
];
p.setEntirePath(lineList);
p.closed = true;
p.filled = false;
p.strokeCap = StrokeCap.ROUNDENDCAP;
p.strokeJoin = StrokeJoin.ROUNDENDJOIN;
p.strokeWidth = 2;

// draw closed path
var p = layer.pathItems.add();
var lineList = [
  [30, -20],
  [50, -30],
  [40, -15]
];
p.setEntirePath(lineList);
p.closed = true;
p.filled = false;
p.strokeCap = StrokeCap.ROUNDENDCAP;
p.strokeJoin = StrokeJoin.ROUNDENDJOIN;
p.strokeWidth = 2;
