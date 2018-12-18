const Discord = require("discord.js");

module.exports = {
	name: 'uzi',
	description: 'uzi',
	cooldown: 5,
	execute(message) {

		const aEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Micro UZI | 9mm')
    .setDescription('Micro UZI has a fast fire rate but suffers from high recoil and poor accuracy. The Weapon Has a 25 round magazine and is chambered in 9mm.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/519005444375707659/latest14.jpg')

const bEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'Submachine Gun', true)
    .addField('AMMO TYPE', '9mm', true)
    .addField('DAMAGE', '23', true)
    .addField('BULLET SPEED', '?', true)
    .addField('ATTACHMENTS', '3', true)
    .addField('MAG CAPACITY', '25', true)
    .addField('EXT.MAG CAPACITY', '35', true)
    .addField('FIRING MODES', 'Semi-auto  & Full auto', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(aEmbed)
message.channel.send(bEmbed)
	},
};