const Discord = require("discord.js");

module.exports = {
	name: 'qbz',
	description: 'qbz',
	cooldown: 5,
	execute(message) {

		const aEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('QBZ95 | 5.56mm')
    .setDescription('QBZ is a bullpup assualt rifle in Battlegrounds exlusive to Sanhok being the replacement for the SCAR-L in that map.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/518879780012294145/latest5.jpg')

const bEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'Assault Rifle', true)
    .addField('AMMO TYPE', '5.56mm', true)
    .addField('DAMAGE', '43', true)
    .addField('BULLET SPEED', '?', true)
    .addField('ATTACHMENTS', '4', true)
    .addField('MAG CAPACITY', '30', true)
    .addField('EXT.MAG CAPACITY', '40', true)
    .addField('FIRING MODES', 'Single & Auto', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(aEmbed)
message.channel.send(bEmbed)
	},
};