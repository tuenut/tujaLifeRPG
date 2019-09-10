const {ipcMain} = require('electron')
const zerorpc = require("zerorpc");

let client = new zerorpc.Client();
client.connect("tcp://127.0.0.1:4242");


ipcMain.on('get_date', (event, arg) => {
  client.invoke('get_date', (error, res, more) => event.reply('get_date-reply', res));
})

