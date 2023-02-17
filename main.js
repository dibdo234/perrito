noseX=0;
noseY=0;
function preload(){
nariz = loadImage('https://i.postimg.cc/JzJkBWbw/perro-removebg-preview.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}
function modelLoaded(){
console.log('poseNet esta iniciando');
}
function gotPose(results){
    if(results.length>0){
        console.log(results);
      noseX=results[0].pose.nose.x-25;
      noseY = results[0].pose.nose.y-10;
        console.log("nose x="+ noseX );
        console.log("nose y="+ noseY);
    }
}
function draw(){
image(video,0,0,300,300);
//circle(noseX,noseY,20);
image(nariz,noseX,noseY,50,50);
}
function take_snapshot(){
    save('juanpayaso.png');
}