chrome.browserAction.setBadgeBackgroundColor({
  color: [230, 0, 0, 18]
});

setInterval(function(){
  chrome.browserAction.setBadgeText({text: Array.from(navigator.getGamepads()).filter(e => e !== null).length.toString()});

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, {intent: "screenshot"});
  });
}, 1000);
