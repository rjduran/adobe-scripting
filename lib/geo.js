// rectangle (square) function
function rect(layer, x, y, w, h) {
  var y_ = convertToUnits(y);
  var x_ = convertToUnits(x);
  var w_ = convertToUnits(w);
  var h_ = convertToUnits(h);
  
  return layer.pathItems.rectangle(-y_, x_, w_, h_);
}

// rounded rectangle function
function rrect(layer, x, y, w, h, r) {
  var y_ = convertToUnits(y);
  var x_ = convertToUnits(x);
  var w_ = convertToUnits(w);
  var h_ = convertToUnits(h);
  var r_ = convertToUnits(r);
  
  return layer.pathItems.roundedRectangle(-y_, x_, w_, h_, r_, r_, false);
}

// circle function
function ellipse(layer, x, y, w, h) {
  var y_ = convertToUnits(y);
  var x_ = convertToUnits(x);
  var w_ = convertToUnits(w);
  var h_ = convertToUnits(h);
  
  return layer.pathItems.ellipse(-y_, x_, w_, h_);
}

// guide line function
function guideLine(layer, x0, y0, x1, y1) {
  var x0_ = convertToUnits(x0);
  var y0_ = convertToUnits(y0);
  var x1_ = convertToUnits(x1);
  var y1_ = convertToUnits(y1);
  
  var ll = new Array([x0_, -y0_], [x1_, -y1_]);

  var l = layer.pathItems.add();
  l.setEntirePath(ll);
  l.guides = true;
  
  return l;
}

// line function
function line(layer, x0, y0, x1, y1) {
  var x0_ = convertToUnits(x0);
  var y0_ = convertToUnits(y0);
  var x1_ = convertToUnits(x1);
  var y1_ = convertToUnits(y1);
  
  var ll = new Array([x0_, -y0_], [x1_, -y1_]);

  var l = layer.pathItems.add();
  l.setEntirePath(ll);
  l.filled = false;
  
  return l;
}

// point function
function point(layer, x, y, scale, color) {
  var y_ = convertToUnits(y);
  var x_ = convertToUnits(x);
  var w_ = convertToUnits(scale);
  var h_ = convertToUnits(scale);
  var color_ = color; //= makeColorRGB(0,0,0);
  
  var p = layer.pathItems.ellipse(-y_+h_/2, x_-h_/2, w_, h_);
  p.filled = true;
  p.stroked = false;
  if(color) {
    p.fillColor = color_;
  } else {
    p.fillColor = makeColorRGB(0,0,0);
  }

  return p;
}