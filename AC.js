status="";
img="";
Objects=[];
function preload(){
    img = loadImage("AC.jpeg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status:detecting objects";
}
function draw(){
    image(img,0,0,640,420);
    if (status !="") {
        for( i=0; i<Objects.length;i++){
            document.getElementById("status").innerHTML="status:object detected";
            fill("red");
            percent=floor(Objects[i].confidence*100);
            text(Objects[i].label +" "+ percent+"%",Objects[i].x+15,Objects[i].y +15);
            noFill();
            stroke("red");    
            rect(Objects[i].x,Objects[i].y,Objects[i].width,Objects[i].height);
        }
    }
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
    Objects=results;
}
}