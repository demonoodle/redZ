const Discord = require("discord.js");

module.exports = {
	name: 'vector',
	description: 'vector',
	cooldown: 5,
	execute(message) {

		const aEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Kriss VECTOR | .45ACP')
    .setDescription('Kriss Vector is a type of Submachine Gun  in PlayerUnknowns Battlegrounds. It is a very powerful SMG most appropriate for short to mid-range combat.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/519005445029888031/latest15.jpg')

const bEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'Submachine Gun', true)
    .addField('AMMO TYPE', '.45ACP', true)
    .addField('DAMAGE', '31', true)
    .addField('BULLET SPEED', '?', true)
    .addField('ATTACHMENTS', '4', true)
    .addField('MAG CAPACITY', '13', true)
    .addField('EXT.MAG CAPACITY', '25', true)
    .addField('FIRING MODES', 'Semi-auto, Burst  & Full auto', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(aEmbed)
message.channel.send(bEmbed)
	},
};