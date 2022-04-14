img="";
status="";
objects= [];

function preload()
{
img=loadImage("bathroom.png");
}

function setup()
{
canvas=createCanvas(600,400);
canvas.center();
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="status= Detecting objects";
} 



function modelLoaded()
{
console.log("modelLoaded");
status=true;
objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error){
        console.error(error);

    }
    console.log(results);
    objects= results;
}



function draw()
{
image(img, 0,0, 600,400);
if(status !="")
{
    for(var a=0;a<objects.length;a++)
    {
        document.getElementById("status").innerHTML="status= object detected";
        fill("#31e0c0");
        percent=floor(objects[a].confidence*100);
        text(objects[a].label+ " "+percent+"%",objects[a].x,objects[a].y);
        noFill();
        stroke("#0e1318");
        rect(objects[a].x,objects[a].y,objects[a].width, objects[a].height);

    }
}







}