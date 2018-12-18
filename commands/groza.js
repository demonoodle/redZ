const Discord = require("discord.js");

module.exports = {
	name: 'groza',
	description: 'groza',
	cooldown: 5,
	execute(message) {

		const aEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('GROZA | 7.62mm')
    .setDescription('A powerful, fast rate-of-fire bullpup Assault Rifle. It can be devastating at close range and still competent for long distance shots.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/518875872862797827/latest2.jpg')

const bEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'Assault Rifle', true)
    .addField('AMMO TYPE', '7.62mm', true)
    .addField('DAMAGE', '48', true)
    .addField('BULLET SPEED', '715', true)
    .addField('ATTACHMENTS', '3', true)
    .addField('MAG CAPACITY', '30', true)
    .addField('EXT.MAG CAPACITY', '40', true)
    .addField('FIRING MODES', 'Single & Auto', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(aEmbed)
message.channel.send(bEmbed)
	},
};