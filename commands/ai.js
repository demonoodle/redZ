const Discord = require("discord.js");
const { prefix, token, kose, apiaiToken } = require('./config.json');
const apiai = require('apiai')
const app = apiai(apiaiToken);

module.exports = {
	name: '!',
	description: 'saying',
	cooldown: 5,
	execute(message,args) {

const request = app.textRequest(message.content.slice(2), {
        sessionId: message.author.id
    });
    request.on('response', function(response) {
        console.log(response);
        var intent = response.result.metadata.intentName

        // Here you can make if statements to check if an intent it used
        // e.x 
        // if (intent == "yes") {
        //     message.channel.send('no')
        // }
    });

    request.on('error', function(error) {
        console.log(error);
    });

    request.end()

    request.on('response', function(response) {
        let responseText = response.result.fulfillment.speech;
        message.channel.send(`${responseText}`);
    });

    request.on('error', function(error) {
        console.log(error);
    });
	},
};