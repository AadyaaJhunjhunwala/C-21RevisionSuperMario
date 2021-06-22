var platform1, platform2,countDistanceX=0,gap;


function preload(){}


function setup() {
  createCanvas(9000, 668);

for(var i=0;i<20;i=i+1){
platform1=new Platform(countDistanceX);
gap=random([80,0,0,30,80])
countDistanceX = countDistanceX+platform1.rw + gap
}
}



function draw() {
  background('skyblue'); 
 drawSprites();
}

