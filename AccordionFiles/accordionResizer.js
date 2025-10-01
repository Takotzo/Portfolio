// Only run if embedded in a parent iframe
if (window.frameElement) {
    const resizeObserver = new ResizeObserver(() => {
        window.frameElement.style.height = document.body.scrollHeight + 15 + "px";
    });
    resizeObserver.observe(document.body);
}