/** CREATING NEW FILES
 *  
 *  When using a file outside of main, we have to use the format below
 *   - Use the module.exports = client => {}
 *   - Next add whatever you want the bot to do within the curly braces
 *
 * Example */
module.exports = client => {
    // join and leave voice channels
    client.on('message', async message => {
        // Voice only works in guilds, if the message does not come from a guild,
        // we ignore it
        if (!message.guild) return;
    
        if (message.content === '/join') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
            } else {
                message.reply('You need to join a voice channel first!');
            }
        }
        if (message.content === '/leave') {
            // Only try to leave the sender's voice channel if they are in one themselves
            if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.leave();
            } else {
            message.reply('You need to join a voice channel first!');
            }
        }
    });

}