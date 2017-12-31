chrome.runtime.onMessage.addListener(function(message) {
  document.dispatchEvent(new CustomEvent('multipadpressed', {
    detail: message.intent
  }));
});
