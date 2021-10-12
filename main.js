Status="";
objects="";

function preload(){
    img= loadImage('https://media.istockphoto.com/photos/healthy-fresh-rainbow-colored-fruits-and-vegetables-background-picture-id1208790371?k=20&m=1208790371&s=612x612&w=0&h=6BngNrl8TColGkvSGJUKFKIM5bv31Nc8MvQhmmC2LlM=')
}

function setup(){
    canvas=createCanvas(380, 380);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML= 'status: detecting objects';
  
}
function modelLoaded(){
    console.log('Model Loaded!');
    Status= true;
    objectDetector.detect(img,gotresult);
}
function gotresult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects= results;
    }
}
function draw(){
    image(img, 0, 0, 380, 380);
    if(Status != ""){
        objectDetector.detect(img,gotresult);
        r= random(255);
        g= random(255);
        b= random(255);
        for(i=0; i<objects.length; i++){
            document.getElementById('status').innerHTML= 'status: objects detected';
            document.getElementById('object_number').innerHTML= 'Number of objects detected: '+objects.length;
            percent= floor(objects[i].confidence*100);
            fill(r, g, b);
            text(objects[i].label +" "+percent+"%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke(r, g, b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
