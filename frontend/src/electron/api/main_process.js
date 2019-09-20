const {ipcMain} = require("electron");
const zerorpc = require("zerorpc");

let client = new zerorpc.Client();
client.connect("tcp://127.0.0.1:4242");


ipcMain.on("get_date", (event, arg) => {
  const callback = (error, res, more) => event.reply("get_date-reply", res);

  client.invoke("get_date", callback);
});

ipcMain.on("create_character", (event, arg) => {
  const callback = (error, res, more) => event.reply("create_character-reply", res);

  client.invoke("create_character", arg, callback);
});

ipcMain.on("get_character", (event, arg) => {
  const callback = (error, res, more) => event.reply("get_character-reply", res);

  client.invoke("get_character", callback);
});

ipcMain.on("delete_character", (event, arg) => {
  const callback = (error, res, more) => event.reply("delete_character-reply", res);

  client.invoke("delete_character", callback);
});