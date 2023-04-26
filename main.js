song_hp= "";
song_pp= "";

function preload(){
    song_hp = loadSound("hpmusic.mp3");
    song_pp = loadSound("ppmusic.mp3");
}
 function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
 }

 function draw(){
    image(video,0,0,600,500);
 }