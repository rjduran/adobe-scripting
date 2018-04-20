var ALPHA_CAPS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ALPHA_LOWER = "abcdefghijklmnopqrstuvwxyz";
var ALPHA_NUMS = "1234567890";

function dateTimeStr() {
  var d = new Date();
  var day = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();
  var ms = d.getMilliseconds();
  var sec = d.getSeconds();
  return year + "-" + month + "-" + day + "-" + sec + "-" + ms;
}

function log(data) {
  var doc = app.activeDocument;
  //var debug = doc.layers.add();
  var layer = doc.layers[0];
  //debug.name = "debug"; // make a debug layer
  var text = layer.textFrames.add();
  text.contents = data;
  text.textRange.characterAttributes.size = 12;
  text.textRange.characterAttributes.fillColor = makeColorRGB(0,0,0);
  text.position = [0,20]; // just put it above the artboard
}
