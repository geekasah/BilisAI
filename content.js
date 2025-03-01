let imgCount = 0;

function countAllImages() {
  imgCount = document.images.length; // Counts all `<img>` elements
  chrome.runtime.sendMessage({ imgCount });
}

// Detect when new images are added dynamically
const observer = new MutationObserver(() => {
  countAllImages();
});

observer.observe(document.body, { childList: true, subtree: true });

// Initial count on page load
countAllImages();
