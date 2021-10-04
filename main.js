Status="";

function preload(){
    img= loadImage('https://previews.123rf.com/images/serezniy/serezniy1110/serezniy111000083/10754080-fresh-vegetables-in-basket-on-wooden-table-on-green-background.jpg');
}

function setup(){
    canvas=createCanvas(640, 420);
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
    image(img, 0, 0, 640, 420);
        }
