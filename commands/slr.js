const Discord = require("discord.js");

module.exports = {
	name: 'slr',
	description: 'slr',
	cooldown: 5,
	execute(message) {

		const aEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('SLR | 7.62mm')
    .setDescription('SLR is a type of DMRs for PlayerUnknowns Battlegrounds.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/518999226987053058/latest13.jpg')

const bEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'DMRs', true)
    .addField('AMMO TYPE', '7.62mm', true)
    .addField('DAMAGE', '?', true)
    .addField('BULLET SPEED', '?', true)
    .addField('ATTACHMENTS', '5', true)
    .addField('MAG CAPACITY', '10', true)
    .addField('EXT.MAG CAPACITY', '20', true)
    .addField('FIRING MODES', 'Semi-auto', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(aEmbed)
message.channel.send(bEmbed)
	},
};