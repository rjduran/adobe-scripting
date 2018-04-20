// made a single lib to include other sub libs
#include "../lib/main.js"

// setters

// Grid Color
// For Preferences > Guides & Grid > Grid

// Dark color is associated with "Gridline every"
var rDark = 0;
var gDark = 0;
var bDark = 0;
app.preferences.setRealPreference('Grid/Color/Dark/r', rDark); // Color > Custom
app.preferences.setRealPreference('Grid/Color/Dark/g', gDark); // Color > Custom
app.preferences.setRealPreference('Grid/Color/Dark/b', bDark); // Color > Custom
// Lite color is associated with "Subdivisions"
var rLite = 1.0;
var gLite = 0;
var bLite = 0;
app.preferences.setRealPreference('Grid/Color/Lite/r', rLite); // Color > Custom
app.preferences.setRealPreference('Grid/Color/Lite/g', gLite); // Color > Custom
app.preferences.setRealPreference('Grid/Color/Lite/b', bLite); // Color > Custom

// Other Settings
// Lines or Dots?
// app.preferences.setIntegerPreference('Grid/Style', 1); // 0 = Lines, 1 = Dots

// Grid in Front or Back?
// app.preferences.setIntegerPreference('Grid/Posn', 0); // 0 = Grid in Front, 1 = Grid in Back

// Grid
// For Preferences > Guides & Grid > Grid

// Units: pt
var hSpacing = 10; // 10 pt
var vSpacing = 10; // 10 pt
var hSubdiv = 10;
var vSubdiv = 10;
app.preferences.setRealPreference('Grid/Horizontal/Spacing', hSpacing); // Gridline every
app.preferences.setRealPreference('Grid/Vertical/Spacing', vSpacing); // Gridline every
app.preferences.setIntegerPreference('Grid/Horizontal/Ticks', hSubdiv); // Subdivisions
app.preferences.setIntegerPreference('Grid/Vertical/Ticks', vSubdiv); // Subdivisions
var doc = makeDocument(100, 100); // make new doc in pts

//--

// Units: mm
// var hSpacing = pts2mm(10); // 10 mm
// var vSpacing = pts2mm(10); // 10 mm
// var hSubdiv = 10;
// var vSubdiv = 10;
// app.preferences.setRealPreference('Grid/Horizontal/Spacing', hSpacing); // Gridline every
// app.preferences.setRealPreference('Grid/Vertical/Spacing', vSpacing); // Gridline every
// app.preferences.setIntegerPreference('Grid/Horizontal/Ticks', hSubdiv); // Subdivisions
// app.preferences.setIntegerPreference('Grid/Vertical/Ticks', vSubdiv); // Subdivisions
// var doc = makeDocument(100, 100, "MM"); // make a new document in mm

//--

// Units: in
// var hSpacing = pts2in(10); // 10 in
// var vSpacing = pts2in(10); // 10 in
// var hSubdiv = 10;
// var vSubdiv = 10;
// app.preferences.setRealPreference('Grid/Horizontal/Spacing', hSpacing); // Gridline every
// app.preferences.setRealPreference('Grid/Vertical/Spacing', vSpacing); // Gridline every
// app.preferences.setIntegerPreference('Grid/Horizontal/Ticks', hSubdiv); // Subdivisions
// app.preferences.setIntegerPreference('Grid/Vertical/Ticks', vSubdiv); // Subdivisions
// var doc = makeDocument(100, 100, "IN"); // make a new document in inches

//--

// getters
// For Preferences > Guides & Grid > Grid

var hSpacing = app.preferences.getRealPreference('Grid/Horizontal/Spacing'); // Gridline every
var vSpacing = app.preferences.getRealPreference('Grid/Vertical/Spacing'); // Gridline every
var hSubdiv = app.preferences.getIntegerPreference('Grid/Horizontal/Ticks'); // Subdivisions
var vSubdiv = app.preferences.getIntegerPreference('Grid/Vertical/Ticks'); // Subdivisions

$.writeln("Horizontal Spacing: " + convertFromUnits(hSpacing));
$.writeln("Vertical Spacing: " + convertFromUnits(vSpacing));
$.writeln("Horizontal Ticks: " + hSubdiv);
$.writeln("Vertical Ticks: " + vSubdiv);
