const Discord = require('discord.js');
const client = new Discord.Client();
const usefulFunc = require('./useful-functions');
const ytdl = require('ytdl-core');

/** CREATING FUNCTIONS
 * 
 * When creating a new fuction for the bot, we will use the formate below.
 *  - You first need to create a new javascript file like the join-vc.js. 
 *  - Next you use the syntax below to finalize the function
 * 
 * We will call these fuctions in client.once()
 * to make the bot use the commands
 *
 * EXAMPLE */
const joinVC = require('./join-vc');
// Add more below here




/** RUNNING THE BOT
 * 
 * the client.once() is call that runs our robot.
 * We will call our functins we created above in the client.once()
 * to make our bot do what we want
 */
client.once('ready', () =>{
  // on message to show that it is working
  console.log('Kinky Jadon has awoken!');
    
  // adding function calls so the bot uses the functions we created
  /* Example */
  joinVC(client);

  // add more here
})

// This stays as the last line
client.login('ODU3MzkyOTcwNzg5OTQ1MzQ2.YNO7bQ.BwXzdC1TdfSnQwe_8KqOcb2JwO4');