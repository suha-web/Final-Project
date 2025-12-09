let xywh = [
[0, 0, 400, 400],
[400, 0, 400, 400],
[0, 400, 400, 400],
[400, 400, 400, 400],
]
let myFill = 255;
let img1;
let img2;
let img3;
let img4;
let sounds = [];

function setup() {
  createCanvas(800, 800);
  rectMode(CORNER); 
}

function preload() {
  img1 = loadImage('image1.png');
  img2 = loadImage('image2.png');
  img3 = loadImage('image3.png');
  img4 = loadImage('image4.png');
  sounds[0] = loadSound('Heart_Sound.m4a');
  sounds[1] = loadSound('Brain_Sound.m4a');
  sounds[2] = loadSound('Eye_Sound.m4a');
  sounds[3] = loadSound('Blood_Sound.m4a');
}

function draw(){
  background(255); 

  // red square Heart
  if(mouseX > xywh[0][0] && mouseX < xywh[0][0]+xywh[0][2] && mouseY > xywh[0][1]&& mouseY < xywh[0][1] + xywh[0][3]){
    myFill = [255, 0, 0];
    fill(myFill);
    rect(xywh[0][0], xywh[0][1], xywh[0][2], xywh[0][3]); 
    image(img1, 0, 0, 0, 0);
  }


  // yellow square Brain
  if(mouseX > xywh[1][0] && mouseX < xywh[1][0]+xywh[1][2] && mouseY > xywh[1][1]&& mouseY < xywh[1][1] + xywh[1][3]){
    myFill = [255, 204, 0];
    fill(myFill);
    rect(xywh[1][0], xywh[1][1], xywh[1][2], xywh[1][3]);
    image(img2, 400, 0, 400, 400);
  }

  // blue square Eye
  if(mouseX > xywh[2][0] && mouseX < xywh[2][0]+xywh[2][2] && mouseY > xywh[2][1]&& mouseY < xywh[2][1] + xywh[2][3]){
    myFill = [10, 150, 240];
    fill(myFill);
    rect(xywh[2][0], xywh[2][1], xywh[2][2], xywh[2][3]); 
    image(img3, 0, 400, 0, 400);
  } 
  

  // pink square Blood
  if(mouseX > xywh[3][0] && mouseX < xywh[3][0]+xywh[3][2] && mouseY > xywh[3][1]&& mouseY < xywh[3][1] + xywh[3][3]){
    myFill = [255, 204, 255];
    fill(myFill);
    rect(xywh[3][0], xywh[3][1], xywh[3][2], xywh[3][3]); 
    image(img4, 400, 400, 400, 400);
  }  
}

function mousePressed(){
  let quarterIndex;

  if(mouseX > xywh[0][0] && mouseX < xywh[0][0]+xywh[0][2] && mouseY > xywh[0][1]&& mouseY < xywh[0][1] + xywh[0][3]){
    quarterIndex = 0; //Red square heart
  } else if(mouseX > xywh[1][0] && mouseX < xywh[1][0]+xywh[1][2] && mouseY > xywh[1][1]&& mouseY < xywh[1][1] + xywh[1][3]){
    quarterIndex = 1; //yellow square brain
  } else if(mouseX > xywh[2][0] && mouseX < xywh[2][0]+xywh[2][2] && mouseY > xywh[2][1]&& mouseY < xywh[2][1] + xywh[2][3]){
    quarterIndex = 2; //blue square eyes
  } else if(mouseX > xywh[3][0] && mouseX < xywh[3][0]+xywh[3][2] && mouseY > xywh[3][1]&& mouseY < xywh[3][1] + xywh[3][3]){
    quarterIndex = 3; //pink square blood
  }
  
  sounds.forEach(s => { if (s.isPlaying()) s.stop(); });

   if (sounds[quarterIndex]) {
      sounds[quarterIndex].play();
    }
  
  }

