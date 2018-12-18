const Discord = require("discord.js");

module.exports = {
	name: 'obesitas',
	description: 'panjul obesitas',
	cooldown: 5,
	execute(message) {

		const panjulEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('PANJUL OBESITAS')
    
    
    
    .setImage('https://cdn.discordapp.com/attachments/498895938610266113/519442795753111553/20181204_044333.jpg')
    .setTimestamp()
    



message.channel.send(panjulEmbed);
	},
};