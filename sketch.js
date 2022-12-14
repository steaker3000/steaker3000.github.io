const siteNumber = 4;

if (typeof oldState == 'undefined') {
    oldState = 0;
}
if (typeof state == 'undefined') {
    state = 0;
    console.log('init');
}
window.addEventListener("scroll", (event) => {
  var h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

    var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    state = ((percent -25)/75 * siteNumber);
    if (state <= 0) state =0;
    state = Math.round(state);
});

console.log(state);

// create three divs, pass in each one a pointer and attach them to a different .flex-item element
let sizeX = window.innerWidth;
let sizeY = window.innerHeight;

//Store position of skateboard
var rotationPositive = [true, true, true];
var positionOld = [0 , 0 , 0];
var positionStates = [[0,0,0] , [100,50,100] , [90,340,0] , [180,0,0]  , [90,0,0] , [0,0,0] , [0,0,0]];
const turningSpeed= 1;

// p5 sketch 1
const sketch1 = function(p) {

  p.preload = function()
  {
    p.menuText = p.loadStrings("assets/menu.txt");
  }
  p.setup = function() {
    sketchWidth = sizeX*0.25;
    sketchHeight = sizeY;
    p.createCanvas(sketchWidth, sketchHeight);
  }
  p.draw = function()
  {
    p.clear();
    p.background(128);
    p.textSize(50);
    //p.text('menu 1', 10, 30);
    p.fill(255);
    //p.text(p.join(p.testText, "\n"), 10 , 40);
    for (let i = 0; i < 5; i++)
    {
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
    sketchWidth = sizeX*0.75;
    sketchHeight = sizeY*0.5;
    p.createCanvas(sketchWidth, sketchHeight, p.WEBGL);
    p.angleMode(p.DEGREES);
  }
  p.draw = function()
  {
    p.background(128);
    if (state == 0)
    {
      positionOld[0] += turningSpeed;
      if( positionOld[0] >= 360)
      {
        positionOld[0] = 0;
      }
    }

    if (oldState != state)
    {
      //console.log("NEW STATE" + oldState +"  " + state);
      for (let i = 0; i < 3; i++)
      {
        let difference = positionStates[state][i] - positionOld[i];
        if (difference > 0)
        {
          if (Math.abs(difference) > 180){
            rotationPositive[i] = false;
          }
          else{
            rotationPositive[i] = true;
          }
        }
        else{
          if (Math.abs(difference) < 180){
            rotationPositive[i] = true;
          }
          else{
            rotationPositive[i] = false;
          }
        }
      }
    }
    for (let i = 0; i < 3; i++)
    {
      //console.log("STATE " + state + " INDEX " + i + " POS " + positionOld[i] + " NEWPOS" + positionStates[state][i] + 'rotation ' + rotationPositive);
      if (positionStates[state][i] == positionOld[i])
      {
        if( i == 0) p.rotateX(positionOld[i]);
        else if( i == 1) p.rotateY(positionOld[i]);
        else if( i == 2) p.rotateZ(positionOld[i]);
      }
      else if (rotationPositive[i] == true || state ==0)
          {
            if( i == 0) p.rotateX(positionOld[i]+=turningSpeed);
            else if( i == 1) p.rotateY(positionOld[i]+=turningSpeed);
            else if( i == 2) p.rotateZ(positionOld[i]+=turningSpeed);
          }
      else
          {
            if( i == 0) p.rotateX(positionOld[i]-=turningSpeed);
            else if( i == 1) p.rotateY(positionOld[i]-=turningSpeed);
            else if( i == 2) p.rotateZ(positionOld[i]-=turningSpeed);
          }
      if ( positionOld[i] >= 360) positionOld[i] = 0;
      if ( positionOld[i] <= -1) positionOld[i] = 359;
    }

    p.scale(3); // Scaled to make model fit into canvas
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
    p.t1 = p.loadStrings("assets/1.txt");
    p.t2 = p.loadStrings("assets/2.txt");
    p.t3 = p.loadStrings("assets/3.txt");
    p.t4 = p.loadStrings("assets/4.txt");
    p.t5 = p.loadStrings("assets/5.txt");
    p.i1 = p.loadImage("assets/1.jpg");
    p.i2 = p.loadImage("assets/2.jpg");
    p.i3 = p.loadImage("assets/3.jpg");
    p.i4 = p.loadImage("assets/4.jpg");
    p.i5 = p.loadImage("assets/5.jpg");
  }
  p.setup = function() {
    sketchWidth = sizeX*0.7;
    sketchHeight = sizeY*0.45;
    p.noCanvas();
    //p.createDiv(sketchWidth, sketchHeight);
    //p.createCanvas(100, 100);
    p.background(128);
    let img = p.createImg("assets/1.jpg",'PICTURE');
    img.addClass('image');
    img.id('illustration');
    let div = p.createDiv(p.join(p.t1, "<br>"));
    div.addClass('p5jsClass');
    div.id('description');
  }
  p.draw = function()
  {
    p.textSize(50);
    if(oldState != state)
    {
      //console.log("newstate" + state + " " + oldState);
      if (state == 0)
      {
        //console.log('newstate 0');
        const element = document.getElementById("description");
        element.innerHTML = p.join(p.t1, "<br>");
        document.getElementById('illustration').src = "assets/1.jpg";
      }
      else if (state == 1)
      {
        const element = document.getElementById("description");
        element.innerHTML = p.join(p.t2, "<br>");
        document.getElementById('illustration').src = "assets/2.jpg";
      }
      else if (state == 2)
      {
        const element = document.getElementById("description");
        element.innerHTML = p.join(p.t3, "<br>");
        document.getElementById('illustration').src = "assets/3.jpg";
      }
      else if (state == 3)
      {
        const element = document.getElementById("description");
        element.innerHTML = p.join(p.t4, "<br>");
        document.getElementById('illustration').src = "assets/4.jpg";
      }
      else if (state == 4)
      {
        const element = document.getElementById("description");
        element.innerHTML = p.join(p.t5, "<br>");
        document.getElementById('illustration').src = "assets/5.jpg";
      }
    }
    console.log(state);
    oldState = state;

  };
};
const node3 = document.createElement('div');
new p5(sketch3, node3);
window.document.getElementById('p5-3').appendChild(node3);
