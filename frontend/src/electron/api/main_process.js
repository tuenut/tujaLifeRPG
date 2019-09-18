const {ipcMain} = require('electron')
const zerorpc = require("zerorpc");

let client = new zerorpc.Client();
client.connect("tcp://127.0.0.1:4242");


ipcMain.on('get_date', (event, arg) => {
  client.invoke('get_date', (error, res, more) => event.reply('get_date-reply', res));
})

ipcMain.on('create_character', (event, arg) => {
  client.invoke('create_character', arg, (error, res, more) => event.reply('create_character-reply', res));
})

ipcMain.on('get_character', (event, arg) => {
  client.invoke('get_character', (error, res, more) => event.reply('get_character-reply', res));
})

ipcMain.on('delete_character', (event, arg) => {
  client.invoke('delete_character', (error, res, more) => event.reply('delete_character-reply', res));
})