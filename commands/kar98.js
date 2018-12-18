const Discord = require("discord.js");

module.exports = {
	name: 'kar98',
	description: 'kar98',
	cooldown: 5,
	execute(message) {

		const aEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('KARABINER 98 KURZ | 7.62mm')
    .setDescription('KARABINER 98 KURZ (or Kar98k) is the most common sniper rifle, with common ammo (7.62mm) and attachments. It is the least accurate out of the sniper rifles, and has low bullet speed.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/518884216369578009/latest9.jpg')

const bEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'Sniper Rifle', true)
    .addField('AMMO TYPE', '7.62mm', true)
    .addField('DAMAGE', '72', true)
    .addField('BULLET SPEED', '760', true)
    .addField('ATTACHMENTS', '3', true)
    .addField('MAG CAPACITY', '5', true)
    .addField('EXT.MAG CAPACITY', 'No Ext.Mag', true)
    .addField('FIRING MODES', 'Single', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(aEmbed)
message.channel.send(bEmbed)
	},
};