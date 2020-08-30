const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('강아지봇 시작');
});

client.on('message', message => {
  if (message.content === '!짖어') {
    message.reply('멍!!!!!!!');
  }
});

client.on('message', message => {
  if (message.content === 'ㅎㅇ') {
    message.reply('멍멍!(ㅎㅇㄹ)');
  }
});

client.on('message', message => {
  if (message.content === '!앉아') {
    message.reply('(강아지는 앉았다.)');
  }
});

client.on('message', message => {
  if (message.content === '!업드려') {
    message.reply('(강아지는 업드렸다.)');
  }
});

client.on('message', message => {
  if (message.content === '!도와줘') {
    message.reply('멍!(불러오는중...)');
    message.reply('멍!(명령어:!짖어,ㅎㅇ,!앉아,!업드려,!짖어,!빵,!물어,!업드려,!놀아주기)');
  }
});

client.on('message', message => {
  if (message.content === '!놀아주기') {
    message.reply('(강아지를 놀아줬다)');
    message.reply('(강아지는 기분이 좋아졌다)');
  }
});

client.on('message', message => {
  if (message.content === '!도움아') {
    message.reply('멍!');
  }
});

client.on('message', message => {
  if (message.content === '!빵') {
    message.reply('(강아지는 뒤집었다.)');
  }
});

client.on('message', message => {
  if (message.content === '!간식주기') {
    message.reply('(강이지는 신났다)');
  }
});

client.on('message', message => {
  if (message.content === '!물어') {
    message.reply('사람:으악!!!!!');
    message.reply('(사람은 기절했다)');
    message.reply('(효과는 괜찮았다)');
  }
});

client.on('message', message => {
  if (message.content === '!유튜브') {
    message.reply('멍!(봇개발자:https://www.youtube.com/channel/UCLBCtAzKbwKE0SSYXX94VKA?view_as=subscriber)');
  }
});

client.login('NzQ5NTM4MTM0NjY0MTUxMDQw.X0tbyQ.mnz6QnVNpCQK3cagQyu4hYRhsdo');
