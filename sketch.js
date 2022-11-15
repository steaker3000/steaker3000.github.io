// create three divs, pass in each one a pointer and attach them to a different .flex-item element
let sizeX = window.innerWidth;
let sizeY = window.innerHeight;

// p5 sketch 1
const sketch1 = function(p) {
  p.setup = function() {
    sketchWidth = sizeX*0.3;
    sketchHeight = sizeY*0.9;
    p.createCanvas(sketchWidth, sketchHeight);
    //p.createCanvas(100, 100);
    p.background(100);
  }
};
const node1 = document.createElement('div');
new p5(sketch1, node1);
window.document.getElementById('p5-1').appendChild(node1);

// p5 sketch 2
const sketch2 = function(p){
  p.setup = function() {
    sketchWidth = sizeX*0.3;
    sketchHeight = sizeY*0.9;
    p.createCanvas(sketchWidth, sketchHeight);
    //p.createCanvas(100, 100);
    p.background(100);
  }
  p.draw = function() {
  };
};
const node2 = document.createElement('div');
new p5(sketch2, node2);
window.document.getElementById('p5-2').appendChild(node2);

// p5 sketch 3
const sketch3 = function(p) {
  p.setup = function() {
    sketchWidth = sizeX*0.3;
    sketchHeight = sizeY*0.9;
    p.createCanvas(sketchWidth, sketchHeight);
    //p.createCanvas(100, 100);
    p.background(100);
  }
};
const node3 = document.createElement('div');
new p5(sketch3, node3);
window.document.getElementById('p5-3').appendChild(node3);