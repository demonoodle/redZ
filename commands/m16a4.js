const Discord = require("discord.js");

module.exports = {
	name: 'm16a4',
	description: 'm16a4',
	cooldown: 5,
	execute(message) {

		const aEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('M16A4 | 5.56mm')
    .setDescription('M16A4 is the only Assault Rifle that does not have an automatic fire option. However, it is one of the best single-shot long range assault rifles, perhaps the best with a 4x ACOG Scope.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/518877735226048522/latest4.jpg')

const bEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'Assault Rifle', true)
    .addField('AMMO TYPE', '7.62mm', true)
    .addField('DAMAGE', '41', true)
    .addField('BULLET SPEED', '900', true)
    .addField('ATTACHMENTS', '3', true)
    .addField('MAG CAPACITY', '30', true)
    .addField('EXT.MAG CAPACITY', '40', true)
    .addField('FIRING MODES', 'Single & Burst', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(aEmbed)
message.channel.send(bEmbed)
	},
};