chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });


setInterval(function(){
  chrome.browserAction.setBadgeText({text: Array.from(navigator.getGamepads()).filter(e => e !== null).length.toString()});
}, 1000);
