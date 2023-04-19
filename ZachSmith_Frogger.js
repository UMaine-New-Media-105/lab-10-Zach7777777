let carList = [];
let froggyX = 340;
let froggyY = 500;
let newFrog; 
function setup() {
  createCanvas(800, 600);
  newFrog = new froggy(froggyX,froggyY)
  for (let i = 0; i < 5; i++){
    carList[i] = new cars(100,100,2)
  }
}

function draw() {
  background(220);
  addBackround()
  newFrog.show()
  for (let j = 0; j < 5; j++){
    carList[j].show()
    carList[j].move()
    
  }
}


class cars{
  constructor(x,y,speed){
  this.x = x;
  this.y = y;
  this.speed = speed;
  }
  move(){
    this.x = this.x +10
  }
  show(){
    rect(100,350,100,50)
  }
}

class froggy{
  constructor(x,y){
    this.x = x
    this.y = y 
  }
  move(x,y){
    this.xOff = x 
    this.yOff = y
    this.x = this.x + this.xOff
    this.y = this.y + this.yOff
  }
  show(){
  push()
   fill("lime")
  rect(this.x,this.y,60) 
  pop()
  }
}

function addBackround(){
  push()
  noStroke()
  fill("green")
  rect(0,0,800,100)
  rect(0,250,800,100)
  rect(0,500,800,100)
  fill("grey")
  rect(0,350,800,150)
  fill("blue")
  rect(0,100,800,150)
  pop()
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    newFrog.move(0,-20)
  }else if (keyCode === DOWN_ARROW){
    newFrog.move(0,20)
  }else if(keyCode === RIGHT_ARROW){
    newFrog.move(20,0)
  }else if(keyCode === LEFT_ARROW)
    newFrog.move(-20,0)
}
