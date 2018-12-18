const Discord = require("discord.js");

module.exports = {
	name: 'mk14',
	description: 'mk14',
	cooldown: 5,
	execute(message) {

		const aEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('MK14 EBR | 7.62mm')
    .setDescription('Though the Mk14 has a bit more recoil than the SKS, its damage is unmatched by other DMRs. It can also be used in close-quarter combat with an automatic firing setting.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/518999244619776011/latest11.jpg')

const bEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'DMRs', true)
    .addField('AMMO TYPE', '7.62mm', true)
    .addField('DAMAGE', '60', true)
    .addField('BULLET SPEED', '853', true)
    .addField('ATTACHMENTS', '4', true)
    .addField('MAG CAPACITY', '10', true)
    .addField('EXT.MAG CAPACITY', '20', true)
    .addField('FIRING MODES', 'Semi-auto & Full-auto', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(aEmbed)
message.channel.send(bEmbed)
	},
};