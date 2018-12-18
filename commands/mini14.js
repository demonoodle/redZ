const Discord = require("discord.js");

module.exports = {
	name: 'mini14',
	description: 'mini',
	cooldown: 5,
	execute(message) {

		const aEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('MINI 14 | 5.56mm')
    .setDescription('Mini 14 is a great semi-automatic DMR that has excellent recoil control and good damage and moderately efficient accuracy (for a DMR).')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/518997022561533962/latest10.jpg')

const bEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'DMRs', true)
    .addField('AMMO TYPE', '5.56mm', true)
    .addField('DAMAGE', '44', true)
    .addField('BULLET SPEED', '990', true)
    .addField('ATTACHMENTS', '3', true)
    .addField('MAG CAPACITY', '20', true)
    .addField('EXT.MAG CAPACITY', '30', true)
    .addField('FIRING MODES', 'Semi-auto', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(aEmbed)
message.channel.send(bEmbed)
	},
};