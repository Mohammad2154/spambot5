const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const myid = ['605275012785635349'];
const prefix = ['$'];

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credits Farm By Leveii. Developer: 22, Leveii, Cris, Nella.`);
   console.log(`----------------`);
   console.log(`Downloading`);
   console.log(`Downloading.`);
   console.log(`Downloading..`);
   console.log(`Done.`);
   console.log(`Online.`);
   console.log(`----------------`);
});

client2.on('ready', () => {
   console.log(`----------------`);
   console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});



client.on('message', message => {
    if(message.content === prefix+'Daily'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'Total'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === prefix+'Rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client.on('message', message => {
if (message.content === prefix+'Spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**اللهم صلي على سيدنا محمد** :flag_ps:`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "Talk") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Developer');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client2.on('message', message => {
    if(message.content === prefix+'Daily'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'Total'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'Rep'){
        message.channel.send('#rep <@605275012785635349>')
    }
});

client2.on('message', message => {
if (message.content === prefix+'Spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**لا اله الى أنت سبحانك اني كنت من الظالمين <3** :flag_ps:`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "Talk") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Developer');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
