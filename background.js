chrome.browserAction.onClicked.addListener(actionListener);

function actionListener(tab){
    chrome.tabs.sendMessage(tab.id,{});
}