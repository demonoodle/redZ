const Discord = require("discord.js");

module.exports = {
	name: 'dp',
	description: 'dp-28',
	cooldown: 5,
	execute(message) {

		const m416Embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('DP-28 | 7.62mm')
    .setDescription('DP-28 starts out holding 47 rounds and shoots the 7.62 caliber. It is the second LMG of its class and the only LMG that can be found outside of a crate drop.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/519016101099601930/latest19.jpg')

const m417Embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'Light Machine Gun', true)
    .addField('AMMO TYPE', '7.62mm', true)
    .addField('DAMAGE', '49', true)
    .addField('BULLET SPEED', '?', true)
    .addField('ATTACHMENTS', '1', true)
    .addField('MAG CAPACITY', '47', true)
    .addField('EXT.MAG CAPACITY', 'No Ext.Mag', true)
    .addField('FIRING MODES', 'Auto', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(m416Embed)
message.channel.send(m417Embed)
	},
};