chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "saveHighlight") {
      let selectedText = window.getSelection().toString();
      if (selectedText) {
        // Use GPT-3 API to process the selected text (implementation not provided here)
        // Save the processed text to Google Keep (implementation not provided here)
        console.log("Selected Text: ", selectedText);
      } else {
        console.log("No text selected.");
      }
    }
  });
  