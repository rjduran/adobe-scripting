// define the document width (in points)
var width = 100;

// define the document height (in points)
var height = 100;

// create a new document
var doc = app.documents.add(DocumentColorSpace.RGB, width, height);

// shift the zero-point of the rulers in the document relative to the bottom left of the document. Basically, make (0,0) of the artboard the top left corner to make it easier to position objects.
doc.rulerOrigin = [0,height];

// add text to it
var text1 = doc.textFrames.pointText( [0, 0] );

// the text
text1.contents = "Hello World";