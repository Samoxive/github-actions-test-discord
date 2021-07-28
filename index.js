import Discord from 'discord.js';
import fs from 'fs';
const client = new Discord.Client();

client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag}!`);
    console.log(`$GITHUB_WORKSPACE ${process.env.GITHUB_WORKSPACE}`);
    console.log(`CONTENT OF README.md ${fs.readFileSync(`${process.env.GITHUB_WORKSPACE}/README.md`, 'utf8')}`);
    await client.guilds.cache.get('145457131640848384').channels.cache.get('145457131640848384').send('hello')
    process.exit(0);
});

client.login(process.env.DISCORD_TOKEN);