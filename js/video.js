// Add js here.
//page load
var video = document.querySelector("#videoplayer");
video.load();
video.autoplay = false;
video.loop = false;

//play video
function playvideo() {
    video.play();
}
document.querySelector("#play").addEventListener("click", playvideo);

//pause video
function pausevideo() {
    video.pause();
}
document.querySelector("#pause").addEventListener("click", pausevideo);

//slow down
function slowdown() {
    if (video.playbackRate == 0.5) {
        alert("Video is at slowest speed!");
    }
    else if(video.playbackRate == 1){
        video.playbackRate = 0.5;
    }else{
        video.playbackRate = 1;
    }
}
document.querySelector("#slower").addEventListener("click", slowdown);

//speed up
function speedup() {
    if (video.playbackRate == 2) {
        alert("Video is at fastest speed!");
    }
    else if(video.playbackRate == 1){
        video.playbackRate = 2;
    }else{
        video.playbackRate = 1;
    }
}
document.querySelector("#faster").addEventListener("click", speedup);

//skip ahead
function skipahead() {
    if (video.currentTime + 15 > video.duration) {
        video.currentTime = 0;
    }
    else {
        video.currentTime += 15;
    }
}
document.querySelector("#skip").addEventListener("click", skipahead);

//mute video
function mutevideo() {
    let mute_button = document.querySelector("#mute");
    if (video.muted == false) {
        video.muted = true;
        mute_button.innerHTML = "Unmute";
    }
    else {
        video.muted = false;
        mute_button.innerHTML = "Mute";
    }
}
document.querySelector("#mute").addEventListener("click", mutevideo);

//volumn slider
function volumnslider() {
    let text = document.querySelector("#volume");
    let slidebar = document.querySelector("#slider");
    text.innerHTML = slidebar.value;
    video.volume = slidebar.value / 100;
}
document.querySelector("#slider").addEventListener("change", volumnslider);