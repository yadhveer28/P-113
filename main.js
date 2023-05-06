function preload()
{}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

}
function draw()
{
    image(video,230,150,220,200);
    fill("red");
    stroke("red");
circle(50,50,80);
circle(590,50,80);
circle(50,435,80);
circle(590,435,80);
fill("green");
stroke("green")
rect(90,40,460,20);
rect(40,90,20,305);
rect(580,90,20,305);
rect(90,430,460,20);
}


function canvas()
{}