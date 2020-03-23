//  listening for click event
chrome.runtime.onMessage.addListener(messageListener);

if (location.host === "sci-hub.tw"){
    let pdf = document.getElementById('pdf');
    if (pdf){
       // open the pdf viewer if no captcha ..
        window.location.replace(pdf.src);
    }  
}

function messageListener(message,sender, response){
    if (message){
        let url = "http://sci-hub.tw/" + window.location.href;
        window.open(url);
    }
}

