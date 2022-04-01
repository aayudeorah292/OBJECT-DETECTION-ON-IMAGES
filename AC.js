img="";
function preload(){
    img = loadImage("AC.jpeg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("AC",45,75);
    noFill();
    stroke("red");
    rect(30,60,600,300);
}