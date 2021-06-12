song = ""

function preload() {
    song = loadSound("song1.mp3");
    song = loadSound("song2.mp3");
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#ff5757");
    stroke("#000000");
    circle(leftwristX, leftwristY, 20);
    numLeftwristY = Number(leftwristY);
    song.isPlaying();
    song.stop()
}

function setup() {
    Canvas = createCanvas(600, 500);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', got_poses);
}

function play() {
    song.play();
}

function stop() {
    song.stop();
}

function modelloaded() {
    console.log("posenet is initialized");
}

function got_poses(results) {
    if (results.length > 0) {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        console.log("leftwristX =" + leftwristX + " leftwristY =" + leftwristY);
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("rightwristX =" + rightwristX + " rightwristY =" + rightwristY);
    }
}