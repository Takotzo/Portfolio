let player;

// This function will be called by the YouTube Iframe API when it is ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: '6pA61Er4rpQ?autoplay=1', // Replace with your YouTube video ID
        events: {
            'onReady': onPlayerReady
        }
    });
}

// This function will be called when the video is ready to play
function onPlayerReady(event) {
    event.target.playVideo();
}


// To expand the screen space of accordion on start
let frames = document.querySelectorAll(".accordion-iframe")

frames.forEach((frame) =>{
    frame.onload = function() {
        frame.style.height = frame.contentWindow.document.body.scrollHeight + 15 + 'px';
    }
})

