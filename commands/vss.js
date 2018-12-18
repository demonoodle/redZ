const Discord = require("discord.js");

module.exports = {
	name: 'vss',
	description: 'vss',
	cooldown: 5,
	execute(message) {

		const aEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('VSS | 9mm')
    .setDescription('VSS is a suppressed sniper rifle with permanent 4X scope & chambered for 9mm  ammo. This weapon is a very rare loot spawn.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/518884959054856192/latest7.jpg')

const bEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'Sniper Rifle', true)
    .addField('AMMO TYPE', '9mm', true)
    .addField('DAMAGE', '38', true)
    .addField('BULLET SPEED', '280', true)
    .addField('ATTACHMENTS', '2', true)
    .addField('MAG CAPACITY', '10', true)
    .addField('EXT.MAG CAPACITY', '20', true)
    .addField('FIRING MODES', 'Single & Auto', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(aEmbed)
message.channel.send(bEmbed)
	},
};