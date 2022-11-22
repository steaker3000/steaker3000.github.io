var state =0;

window.addEventListener("scroll", (event) => {
  var h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

  var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    //console.log(percent)

    const siteNumber = 5;
    state = ((percent -25)/75 * siteNumber);
    if (state <= 0) state =0;
    state = Math.round(state);
    console.log(state);
});




// create three divs, pass in each one a pointer and attach them to a different .flex-item element
let sizeX = window.innerWidth;
let sizeY = window.innerHeight;

// p5 sketch 1
const sketch1 = function(p) {

  p.preload = function()
  {
    p.menuText = p.loadStrings("assets/menu.txt");
  }
  p.setup = function() {
    sketchWidth = sizeX*0.3;
    sketchHeight = sizeY;
    p.createCanvas(sketchWidth, sketchHeight);
    //p.createCanvas(100, 100);
    //p.noCanvas();
    p.background(0);
  }
  p.draw = function()
  {
    p.clear();
    p.background(0);
    p.textSize(50);
    //p.text('menu 1', 10, 30);
    p.fill(255);
    //p.text(p.join(p.testText, "\n"), 10 , 40);
    for (let i = 0; i < 5; i++) {
      //console.log("YAY" + state);
      if (state == i)
      {
        p.textStyle(p.BOLDITALIC);
      }
      else p.textStyle(p.NORMAL);
      p.text(p.menuText[i], 10, (10+(60 * (i+1))));

    }
    //p.text(p.menuText[2] , 10, 80);
    //p.fill(0);
    //p.text("hello", 10 , 40);
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
    p.background(100);
  }
  p.draw = function()
  {
    p.clear();
    p.background(0);
    p.rotateX(70);
    p.scale(2); // Scaled to make model fit into canvas
    p.rotateZ(( p.mouseX + p.windowWidth / 2 ) / 50);
    //normalMaterial(); // For effect
    //specularMaterial(0);
    //p.textureMode(p.IMAGE);
    //p.textureWrap(p.REPEAT);
    p.texture(p.img);
    p.model(p.skateboard);
    p.debugMode(p.GRID);
  };

};
const node2 = document.createElement('div');
new p5(sketch2, node2);
window.document.getElementById('p5-2').appendChild(node2);

// p5 sketch 3
const sketch3 = function(p) {
  p.preload = function()
  {
    p.testText = p.loadStrings("assets/1.txt");
  }
  p.setup = function() {
    sketchWidth = sizeX*0.7;
    sketchHeight = sizeY*0.45;
    p.noCanvas();
    //p.createDiv(sketchWidth, sketchHeight);
    //p.createCanvas(100, 100);
    p.background(100);
    p.createDiv(p.join(p.testText, "<br>"));
  }
  p.draw = function()
  {
    p.textSize(50);
    //p.textWrap(p.WORD);
    //p.text(p.testText, 10, 30, 1000, 1000);

  };
};
const node3 = document.createElement('div');
new p5(sketch3, node3);
window.document.getElementById('p5-3').appendChild(node3);
