let player;

// This function will be called by the YouTube Iframe API when it is ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: '6pA61Er4rpQ?si=vo-DVlsSDyrOOha9', // Replace with your YouTube video ID
        events: {
            'onReady': onPlayerReady
        }
    });
}

// This function will be called when the video is ready to play
function onPlayerReady(event) {
    event.target.playVideo();
}
