import Discord from 'discord.js';
const client = new Discord.Client();

client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag}!`);
    console.log(`$GITHUB_WORKSPACE ${process.env.GITHUB_WORKSPACE}`)
    await client.guilds.cache.get('145457131640848384').channels.cache.get('145457131640848384').send('hello')
    process.exit(0);
});

client.login(process.env.DISCORD_TOKEN);