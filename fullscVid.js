// Get the video

var video = document.getElementById("myVideo");

// Get your button

var btn = document.getElementById("myBtn");

// Pause and play the video, then change the text to either play/pause 

function myFunction() {

    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play"
    }
}