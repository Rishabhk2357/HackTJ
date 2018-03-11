const request = require('request'); 
const sendTextMessage = (senderId, text) => {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: 'EAAcI57JPIpsBANT2BvlWeD6eILoIIU9wfNRpul94hkZBRNSooCL14Y5CGDey5HCQUJYyBN4fZBIUaAQyQWelQlna7QhuboFCZCw901azZBSGPEKmt7j0lVwXaeYbdTofaxIoeHeWx0gZBcaF9T4L5chuybkovZBDfcmWZCmyuj2F0ZAiqhZBIZB0fc' },
        method: 'POST',
        json: {
            recipient: { id: senderId },
            message: { text },
        }
    });
};
module.exports = (event) => {
    var fs = require('fs');
    var obj = JSON.parse(fs.readFileSync('clients.json', 'utf8'));
    const senderId = event.sender.id;
    //sendTextMessage(senderId, 'cowabunga');
    // sendTextMessage(senderId, 'pls');
    const message = event.message.text;
    
    var apiai = require('apiai');
    var apiAiClient = apiai('6447353227274037b2289769bd80a82a');

    const apiaiSession = apiAiClient.textRequest(message, { sessionId: 'crowdbotics_bot' });
    apiaiSession.on('response', (response) => {
        const result = response.result.metadata.intentName;
        //sendTextMessage(senderId, result);
        if (result == 'Pizza' || result == 'pizza') {
            sendTextMessage(senderId, 'cowabunga');
            sendTextMessage(senderId, obj["Rishin"][0]);
        }
        else if (result == 'assignPartnerHash') {
            //var num = Object.valueOf(Math.floor(Math.random() * 90000) + 10000);
            //obj[num] = [senderId, "", ["","","","","","",""]]
            sendTextMessage(senderId, response.result.fulfillment.speech);
            //sendTextMessage(senderId, num);

        }
        else if (result == 'Default Fallback Intent') {
            sendTextMessage(senderId, response.result.fulfillment.speech);
        }
        else if (result == 'Default Welcome Intent') {
            sendTextMessage(senderId, response.result.fulfillment.speech);
        }
        else if (result == 'makeTrade') {
            sendTextMessage(senderId, response.result.fulfillment.speech);
        }
        else if (result == 'initializeTrade') {
            sendTextMessage(senderId, response.result.fulfillment.speech);
        }



        //const result = response.result.fulfillment.speech;
        //sendTextMessage(senderId, result);
    });
    apiaiSession.on('error', error => console.log(error));
    apiaiSession.end();
};