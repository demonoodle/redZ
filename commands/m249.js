const Discord = require("discord.js");

module.exports = {
	name: 'm249',
	description: 'm249',
	cooldown: 5,
	execute(message) {

		const m416Embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('M249 | 5.56mm')
    .setDescription('M249 is one of two LMGs in PUBG, found in supply drops. Despite its high fire rate and damage output, the recoil is relatively easy to control making it the easiest gun to use while taking on vehicles.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/519014698864345088/latest18.jpg')

const m417Embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'Light Machine Gun', true)
    .addField('AMMO TYPE', '5.56mm', true)
    .addField('DAMAGE', '44', true)
    .addField('BULLET SPEED', '915', true)
    .addField('ATTACHMENTS', '1', true)
    .addField('MAG CAPACITY', '100', true)
    .addField('EXT.MAG CAPACITY', 'No Ext.Mag', true)
    .addField('FIRING MODES', 'Auto', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(m416Embed)
message.channel.send(m417Embed)
	},
};