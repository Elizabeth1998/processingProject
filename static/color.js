
var bx;

var by;

var boxSize;

var overBox;

var locked;

var xOffset;

var yOffset;

var circleXL, circleYL, circleXR, circleYR;

var rectXM, rectYM;

var rectSize;

var mouth;

var pupilXL, pupilYL, pupilXR, pupilYR;

var pupil;

var circleSize;

var rectX1, rectY1, rectX2, rectY2, rectX3, rectY3;

var colorSquare;

var overBoxOne;

var overBoxTwo;

var overBoxThree;

var rectColor;

var circleColor;

var baseColor;

var mouthColor;

var pupilColor;

var firstColor;

var secondColor;

var thirdColor;

function setup() {
    initializeFields();
    createCanvas(640, 360);
    bx = width / 2.0;
    by = height / 2.0;
    rectMode(RADIUS);
    rectColor = color(color(0x40, 0x31, 0xF2));
    pupilColor = color(0);
    mouthColor = color(100);
    circleColor = color(255);
    firstColor = color(color(0x31, 0xF2, 0x52));
    secondColor = color(color(0xA7, 0x31, 0xF2));
    thirdColor = color(color(0xF2, 0x9F, 0x31));
    circleXL = width / 2 / 2 + rectSize;
    circleYL = width / 2 / 2 + 1;
    circleXR = width / 2 / 2 + rectSize - 80;
    circleYR = width / 2 / 2 + 1;
    rectXM = width / 2;
    rectYM = height / 2 + 25;
    pupilXL = width / 2 / 2 + rectSize;
    pupilYL = width / 2 / 2 + 1;
    pupilXR = width / 2 / 2 + rectSize - 80;
    pupilYR = width / 2 / 2 + 1;
    rectX1 = width / 2 - 250;
    rectY1 = height / 2 - 100;
    rectX2 = width / 2 - 250;
    rectY2 = height / 2 - 30;
    rectX3 = width / 2 - 250;
    rectY3 = height / 2 + 40;
}

function draw() {
    background(0);
    // Draw the box
    fill(rectColor);
    rect(bx, by, boxSize, boxSize);
    fill(mouthColor);
    rect(rectXM, rectYM, mouth, 4);
    stroke(0);
    fill(circleColor);
    ellipse(circleXR, circleYR, circleSize, circleSize);
    ellipse(circleXL, circleYL, circleSize, circleSize);
    fill(pupilColor);
    ellipse(pupilXL, pupilYL, pupil, pupil);
    ellipse(pupilXR, pupilYR, pupil, pupil);
    if (mouseX > rectX1 - colorSquare && mouseX < rectX1 + colorSquare && mouseY > rectY1 - colorSquare && mouseY < rectY1 + colorSquare) {
        overBoxOne = true;
        if (mouseIsPressed) {
            rectColor = firstColor;
        }
    } else {
        stroke(153);
        fill(153);
        overBox = false;
    }
    if (mouseX > rectX2 - colorSquare && mouseX < rectX2 + colorSquare && mouseY > rectY2 - colorSquare && mouseY < rectY2 + colorSquare) {
        overBoxOne = true;
        if (mouseIsPressed) {
            rectColor = secondColor;
        }
    } else {
        stroke(153);
        fill(153);
        overBox = false;
    }
    if (mouseX > rectX3 - colorSquare && mouseX < rectX3 + colorSquare && mouseY > rectY3 - colorSquare && mouseY < rectY3 + colorSquare) {
        overBoxOne = true;
        if (mouseIsPressed) {
            rectColor = thirdColor;
        }
    } else {
        stroke(153);
        fill(153);
        overBox = false;
    }
    fill(firstColor);
    rect(rectX1, rectY1, colorSquare, colorSquare);
    fill(secondColor);
    rect(rectX2, rectY2, colorSquare, colorSquare);
    fill(thirdColor);
    rect(rectX3, rectY3, colorSquare, colorSquare);
}

function mousePressed() {
    if (overBox) {
        locked = true;
        fill(255, 255, 255);
    } else {
        locked = false;
    }
    xOffset = mouseX - bx;
    yOffset = mouseY - by;
}

function mouseDragged() {
    if (locked) {
        bx = mouseX - xOffset;
        by = mouseY - yOffset;
        circleXL = mouseX - xOffset + 45;
        circleYL = mouseY - yOffset - 25;
        circleXR = mouseX - xOffset - 45;
        circleYR = mouseY - yOffset - 25;
        rectXM = mouseX - xOffset + 15;
        rectYM = mouseY - yOffset + 25;
        pupilXL = mouseX - xOffset - 45;
        pupilYL = mouseY - yOffset - 25;
        pupilXR = mouseX - xOffset + 45;
        pupilYR = mouseY - yOffset - 25;
    }
}

function mouseReleased() {
    locked = false;
}

function initializeFields() {
    bx = 0;
    by = 0;
    boxSize = 75;
    overBox = false;
    locked = false;
    xOffset = 0.0;
    yOffset = 0.0;
    circleXL = 0;
    circleYL = 0;
    circleXR = 0;
    circleYR = 0;
    rectXM = 0;
    rectYM = 0;
    rectSize = 200;
    mouth = 25;
    pupilXL = 0;
    pupilYL = 0;
    pupilXR = 0;
    pupilYR = 0;
    pupil = 25;
    circleSize = 50;
    rectX1 = 0;
    rectY1 = 0;
    rectX2 = 0;
    rectY2 = 0;
    rectX3 = 0;
    rectY3 = 0;
    colorSquare = 25;
    overBoxOne = false;
    overBoxTwo = false;
    overBoxThree = false;
    rectColor = null;
    circleColor = null;
    baseColor = null;
    mouthColor = null;
    pupilColor = null;
    firstColor = null;
    secondColor = null;
    thirdColor = null;
}

