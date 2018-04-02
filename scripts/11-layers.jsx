#include "../lib/color.js"

// define the document width (in points)
var width = 100;

// define the document height (in points)
var height = 100;

// create a new document
var doc = app.documents.add(DocumentColorSpace.RGB, width, height);

// shift origin
doc.rulerOrigin = [0,height];

// add new layers
// layers are appended to the front of the array, meaning, each layer added is in layers[0].
var layer1 = doc.layers[0]; // default layer for new document
var layer2 = doc.layers.add();
var layer3 = doc.layers.add();
doc.layers.add(); // add "Layer 4"
doc.layers.add(); // add "Layer 5"

// doc.layers by 5th add()
// [0] Layer 5
// [1] Layer 4
// [2] Layer 3
// [3] Layer 2
// [4] Layer 1

// access "Layer 4" in position 1
var layer4 = doc.layers[1];

// access "Layer 5" in position 0 and rename it
var layer5 = doc.layers[0];
layer5.name = "myLayer";

doc.layers.add(); // add "Layer 6"
// access "Layer 6" in position 0 and lock it
var layer6 = doc.layers[0];
layer6.locked = true;

// make 3 more layers ("Layer 7, 8, 9")
for (var i = 0; i < 3; i++) {
  doc.layers.add();
}

// make 3 more layers ("Layer 10, 11, 12") and change color
for (var i = 0; i < 3; i++) {
  var layer = doc.layers.add();
  layer.color = makeColorRGB(255, 255, 0);
  layer.locked = i == 1 ? true : false; // if i == 1, set to true (Result: Lock "Layer 11")
}

// make 4 more layers ("Layer 13, 14, 15, 16") and conditional rename with a range
for (var i = 0; i < 4; i++) {
  var layer = doc.layers.add();
  layer.color = makeColorRGB(255, 100, 0);
  //layer.name = "my_layer_" + (13 + i);
  layer.name = i == 2 ? "foo" : "my_layer_" + (13 + i); // if i == 2, set name to "foo" else "my_layer_##"
}

// coordinates (in points)
var y = 0;
var x = 0;
var w = 10;
var h = 10;

// draw rectangle
var rect = layer1.pathItems.rectangle(-y, x, w, h);
rect.fillColor = makeColorRGB(0,0,255);
rect.stroked = false;

// draw rounded rectangle
var roundRect = layer2.pathItems.roundedRectangle(-y, x + 10, w, h, 1, 1, false);
roundRect.fillColor = makeColorRGB(255,0,0);
roundRect.stroked = false;

// draw rectangle
var rect = layer3.pathItems.rectangle(-y - 20, x + 20, w, h);
rect.fillColor = makeColorRGB(0,0,0);
rect.stroked = true;
rect.strokeColor = makeColorRGB(255,0,0);
rect.strokeWidth = 1;

// draw ellipse
var ellipse = layer4.pathItems.ellipse(-y, x + 30, w, h);
ellipse.fillColor = makeColorRGB(0, 255, 0);
ellipse.stroked = false;