const Discord = require("discord.js");

module.exports = {
	name: 'sks',
	description: 'sks',
	cooldown: 5,
	execute(message) {

		const aEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('SKS | 7.62mm')
    .setDescription('SKS is a DMR that excels in medium range combat. Its high fire-rate and damage are a deadly combination. The drawback to this rifle is that while it takes 5 attachments, it can be difficult to source them all.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/518998211256385538/latest12.jpg')

const bEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'DMRs', true)
    .addField('AMMO TYPE', '7.62mm', true)
    .addField('DAMAGE', '55', true)
    .addField('BULLET SPEED', '800', true)
    .addField('ATTACHMENTS', '5', true)
    .addField('MAG CAPACITY', '10', true)
    .addField('EXT.MAG CAPACITY', '20', true)
    .addField('FIRING MODES', 'Semi-auto', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(aEmbed)
message.channel.send(bEmbed)
	},
};