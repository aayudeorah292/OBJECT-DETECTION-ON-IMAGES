img="";
function preload(){
    img = loadImage("laptop.jpeg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("Laptop",45,75);
    noFill();
    stroke("red");
    rect(30,60,450,350);
}