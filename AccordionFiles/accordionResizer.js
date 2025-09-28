
function resizeIframe() {
    const height = document.documentElement.scrollHeight;
    window.parent.postMessage({ iframeHeight: height }, "*");
}

// Call it whenever content changes (e.g., after expanding text)
document.addEventListener("DOMContentLoaded", resizeIframe);
window.addEventListener("resize", resizeIframe);

// Example: If buttons expand/collapse content dynamically, call resizeIframe() after that too
