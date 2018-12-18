const Discord = require("discord.js");

module.exports = {
	name: 'tamvan',
	description: 'aevz tamvan',
	cooldown: 5,
	execute(message) {

		const panjulEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Dedi Stark the Iron Winkman')
    
  
    
    .setImage('https://cdn.discordapp.com/attachments/498895987146752000/523299047524663298/20181215_022922.gif')
    .setTimestamp()
    



message.channel.send(panjulEmbed);
	},
};