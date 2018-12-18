const Discord = require("discord.js");

module.exports = {
	name: 'ump',
	description: 'ump9',
	cooldown: 5,
	execute(message) {

		const aEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('UMP9 | 9mm')
    .setDescription('UMP, short for Universal Machine pistol, is a submachine gun designed by Heckler & Koch. The UMP is the successor to the MP5, though both are in service to this day.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/519005445797707776/latest17.jpg')

const bEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'Submachine Gun', true)
    .addField('AMMO TYPE', '9mm', true)
    .addField('DAMAGE', '35', true)
    .addField('BULLET SPEED', '400', true)
    .addField('ATTACHMENTS', '4', true)
    .addField('MAG CAPACITY', '30', true)
    .addField('EXT.MAG CAPACITY', '40', true)
    .addField('FIRING MODES', 'Semi-auto, Burst fire & Full auto', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(aEmbed)
message.channel.send(bEmbed)
	},
};