const Discord = require("discord.js");

module.exports = {
	name: 'm416',
	description: 'm416',
	cooldown: 5,
	execute(message) {

		const m416Embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('M416 | 5.56mm')
    .setDescription('M416 is the only Assault Rifle to allow 5 Attachments at once. Its often a heavily favored weapon amongst players for this reason and can most typically be found in military loot zones.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/518796025746423818/latest.jpg')

const m417Embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'Assault Rifle', true)
    .addField('AMMO TYPE', '5.56mm', true)
    .addField('DAMAGE', '41', true)
    .addField('BULLET SPEED', '880', true)
    .addField('ATTACHMENTS', '5', true)
    .addField('MAG CAPACITY', '30', true)
    .addField('EXT.MAG CAPACITY', '40', true)
    .addField('FIRING MODES', 'Single & Auto', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(m416Embed)
message.channel.send(m417Embed)
	},
};