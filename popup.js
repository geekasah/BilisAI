document.addEventListener("DOMContentLoaded", () => {
  chrome.runtime.onMessage.addListener((message) => {
    if (message.imgCount !== undefined) {
      document.getElementById("count").innerText = message.imgCount;
    }
  });

  // Request latest count when popup opens
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: countAllImages
    });
  });
});

function countAllImages() {
  return document.images.length;
}
