
/*
<><><><><><><><><><><><><><><><><>
----------------------------------

Generatore random di testo in P5js
v2
by frmurgia © 2017-18 MIT License
DSII2018 Lab @UNIRSM


https://editor.p5js.org/generative-design/sketches/P_2_3_3_01

[mouse_drag]         : scrivi parole estratte casualmente
[del, backspace ]    : clear screen
----------------------------------
<><><><><><><><><><><><><><><><><>
*/

var newLetter;
 var parole;
 // creo una funzione in cui precarico il file con tutte le parole presenti nel dizionario inglese
 function preload() {
   parole = loadStrings('js/test.txt');
 }

// funzione che restituisce un numero casuale tra 0 e il numero totale di parole presenti nel dizionario
function estrai(){
   var ind = floor(random(parole.length));
   return ind;
}

'use strict';

var x = 0;
var y = 0;
var stepSize = 5.0;

var font = 'IBM Plex Mono';
var letters ;
var fontSizeMin = 3;
var angleDistortion = 0.0;

var counter = 0;
var newLetters ;


function setup() {
  letters =parole[estrai()];

  createCanvas(displayWidth, displayHeight);
  background(255);
  cursor(CROSS);

  x = mouseX;
  y = mouseY;

  textFont(font);
  textAlign(LEFT);
  fill(0);
}

function draw() {
  if (mouseIsPressed && mouseButton == LEFT) {
    var d = dist(x, y, mouseX, mouseY);
    textSize(fontSizeMin + d / 2);
    var newLetter = letters.charAt(counter);
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY - y, mouseX - x);

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();

      counter++;
      if (counter >= letters.length) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;
    }
  }
  if (counter==0){
      letters =parole[estrai()]+" ";
  }
  
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
}



function mouseReleased() {

  letters =parole[estrai()]+" ";
}
