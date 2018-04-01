// necessary since RGBColor class has no constructor
function makeColorRGB(r,g,b){
    var c = new RGBColor();
    c.red   = r;
    c.green = g;
    c.blue  = b;
    return c;
}

// necessary since CMYKColor class has no constructor
function makeColorCMYK(c,m,y,k){
    var ink = new CMYKColor();
    ink.cyan   = c;
    ink.magenta = m;
    ink.yellow  = y;
    ink.black  = k;
    return ink;
}