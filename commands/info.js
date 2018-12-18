module.exports = {
	name: 'info',
	description: 'Display info about yourself.',
	execute(message) {
		message.channel.send(`Username: ${message.author.username}\nID: ${message.author.id}`);
	},
};