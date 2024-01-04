chrome.runtime.onInstalled.addListener(function () {
    chrome.alarms.create("dsaReminder", {
      periodInMinutes: 24 * 60, // Set to 24 hours
      when: Date.now() + 1000, // Start the alarm one second after installation
    });
  });
  
  chrome.alarms.onAlarm.addListener(function (alarm) {
    if (alarm.name === "dsaReminder") {
      chrome.tabs.query({}, function (tabs) {
        tabs.forEach(function (tab) {
          chrome.tabs.sendMessage(tab.id, { action: "showReminder" });
        });
      });
    }
  });
  
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "showReminder") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.windows.create({
          url: chrome.extension.getURL("popup.html"),
          type: "popup",
          width: 350,
          height: 200,
          left: screen.availWidth / 2 - 175,
          top: screen.availHeight / 2 - 100,
        });
      });
    }
  });
  