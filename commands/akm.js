const Discord = require("discord.js");

module.exports = {
	name: 'akm',
	description: 'akm',
	cooldown: 5,
	execute(message) {

		const akmEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('AKM | 7.62mm')
    .setDescription('AKM is a powerful 7.62mm Assault Rifle  that does more damage than 5.56mm rifles. However, recoil is a major issue with this rifle. Only a barrel, magazine, and sight can be attached.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/518874639670312960/latest1.jpg')

const akbEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'Assault Rifle', true)
    .addField('AMMO TYPE', '7.62mm', true)
    .addField('DAMAGE', '48', true)
    .addField('BULLET SPEED', '715', true)
    .addField('ATTACHMENTS', '5', true)
    .addField('MAG CAPACITY', '30', true)
    .addField('EXT.MAG CAPACITY', '40', true)
    .addField('FIRING MODES', 'Single & Auto', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(akmEmbed)
message.channel.send(akbEmbed)
	},
};