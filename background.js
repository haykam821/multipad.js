chrome.browserAction.setBadgeBackgroundColor({ color: [230, 0, 0, 18] });


setInterval(function(){
  chrome.browserAction.setBadgeText({text: Array.from(navigator.getGamepads()).filter(e => e !== null).length.toString()});
}, 1000);
