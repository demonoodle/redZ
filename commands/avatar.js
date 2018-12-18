module.exports = {
	name: 'avatar',
	description: 'Menampilkan avatarmu atau avatar dari user yang di mention.',
	aliases: ['icon', 'ava'],
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Displaying ${message.author.username}\'s avatar: ${message.author.displayAvatarURL}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL}`;
		});

		message.channel.send(avatarList);
	},
};