function preload(){

}
function draw(){
    image(video,0,0,640.1,480.1);
    fill(212,69,69);
    stroke(212,0,1);
    circle(50,50,80);
    circle(50,430,80);
    circle(590,50,80);
    circle(590,430,80);
    fill(69,212,69);
    stroke(69,69,69);
    rect(90,40,460,20);
    rect(90,420,460,20);
    rect(40,90,20,300);
    rect(580,90,20,300);
}
function setup(){
canvas=createCanvas(640.1,480.1);
canvas.position(150,150);
video=createCapture(VIDEO);
video.hide();
}
function take_snapshot(){
save('PictureFrame.png');
}