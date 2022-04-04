status="";
img="";
function preload(){
    img = loadImage("laptop.jpeg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status:detecting objects";
}
function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("Laptop",45,75);
    noFill();
    stroke("red");
    rect(30,60,450,350);
}
function modelLoaded(){
    console.log("model is loaded");
    status=true;
    objectdetector.detect(img,gotresult);
}
function gotresult(error,results){
if (error) {
    console.log(error);
}
else{
    console.log(results);
}
}