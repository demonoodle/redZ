const Discord = require("discord.js");

module.exports = {
	name: 'mbah',
	description: 'mbah panjul',
	cooldown: 5,
	execute(message) {

		const panjulEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('MBAH PANJUL')
    
   
    
    .setImage('https://cdn.discordapp.com/attachments/499808649582084098/519815634893275136/1544004029283_r.jpg')
    .setTimestamp()
  



message.channel.send(panjulEmbed);
	},
};