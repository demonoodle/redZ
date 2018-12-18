const Discord = require("discord.js");

module.exports = {
	name: 'panjul',
	description: 'panjul',
	cooldown: 5,
	execute(message) {

		const panjulEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('MOST WANTED')
    
  
    
    .setImage('https://cdn.discordapp.com/attachments/498895987146752000/518792846543683585/1543660957-picsay.jpg')
    .setTimestamp()
    



message.channel.send(panjulEmbed);
	},
};