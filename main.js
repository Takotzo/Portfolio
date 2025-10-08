// To expand the screen space of accordion on start
let frames = document.querySelectorAll(".accordion-iframe")

frames.forEach((frame) =>{
    frame.onload = function() {
        frame.style.height = frame.contentWindow.document.body.scrollHeight + 15 + 'px';
    }
})

