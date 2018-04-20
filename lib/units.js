var PTS_IN = 72;
var PTS_MM = 2.834645;
var PTS_CM = 28.346;

// convert from points to inches
function pts2in(v) {
  return PTS_IN*v;
}

// convert from points to millimeters
function pts2mm(v) {
  return PTS_MM*v;
}

// convert from points to centimeters
function pts2cm(v) {
  return PTS_CM*v;
}

// convert from inches to points
function in2pts(v) {
  return v/PTS_IN;
}

// convert from millimeters to points
function mm2pts(v) {
  return v/PTS_MM;
}

// convert from centimeters to points
function cm2pts(v) {
  return v/PTS_CM;
}
