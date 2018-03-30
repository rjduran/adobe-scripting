// define the document width (in points)
var width = 100;

// define the document height (in points)
var height = 100;

// create a new document; Set to RGB colorspace
var doc = app.documents.add(DocumentColorSpace.RGB, width, height);

// add text to it
var text1 = doc.textFrames.pointText( [10, 0] );

// the text
text1.contents = "Hello World";