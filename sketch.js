window.addEventListener("scroll", (event) => {
    var a = window.scrollTop;
    var b = window.scrollHeight - window.clientHeight;
    let scroll = a / b;
    console.log(scroll)
});

const siteNumber = 5;


// create three divs, pass in each one a pointer and attach them to a different .flex-item element
let sizeX = window.innerWidth;
let sizeY = window.innerHeight;

// p5 sketch 1
const sketch1 = function(p) {

  p.preload = function (){

  }
  p.setup = function() {
    sketchWidth = sizeX*0.3;
    sketchHeight = sizeY*0.9;
    p.createCanvas(sketchWidth, sketchHeight);
    //p.createCanvas(100, 100);
    p.background(0);
  }
  p.draw = function()
  {
    p.textSize(50);
    p.text('menu 1', 10, 30);
    p.fill(0, 102, 153);
    p.text('menu 2', 10, 60);
    p.fill(0, 102, 153, 51);
    p.text('menu 3', 10, 90);
  };

};
const node1 = document.createElement('div');
new p5(sketch1, node1);
window.document.getElementById('p5-1').appendChild(node1);

// p5 sketch 2
const sketch2 = function(p)
{
  p.preload
  {
    p.img = p.loadImage('assets/UV.png');
    p.skateboard = p.loadModel('assets/skateboard.obj', true);
  }
  p.setup = function()
  {

    sketchWidth = sizeX*0.7;
    sketchHeight = sizeY*0.45;
    p.createCanvas(sketchWidth, sketchHeight, p.WEBGL);
    p.angleMode(p.DEGREES);
    p.background(0);
  }
  p.draw = function()
  {
    p.rotateX(70);
    p.scale(4); // Scaled to make model fit into canvas
    p.rotateZ(( p.mouseX + p.windowWidth / 2 ) / 50);
    //normalMaterial(); // For effect
    //specularMaterial(0);
    //p.textureMode(p.IMAGE);
    //p.textureWrap(p.REPEAT);
    p.texture(p.img);
    p.model(p.skateboard);
  };

};
const node2 = document.createElement('div');
new p5(sketch2, node2);
window.document.getElementById('p5-2').appendChild(node2);

// p5 sketch 3
const sketch3 = function(p) {
  p.setup = function() {
    sketchWidth = sizeX*0.7;
    sketchHeight = sizeY*0.45;
    p.createCanvas(sketchWidth, sketchHeight);
    //p.createCanvas(100, 100);
    p.background(100);
  }
  p.draw = function()
  {
    p.textSize(50);
    p.textWrap(p.WORD);
    p.text('menu 1 ist nur ein platzhalter im moment.,,,,,,,', 10, 10, 500, 100);
  };
};
const node3 = document.createElement('div');
new p5(sketch3, node3);
window.document.getElementById('p5-3').appendChild(node3);
