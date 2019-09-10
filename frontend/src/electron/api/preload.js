const {ipcRenderer} = require('electron')


window.API = {}

window.API.get_date = () => {
  ipcRenderer.send('get_date');
}

window.API.subscribe_get_date = (callback) => ipcRenderer.on('get_date-reply', (event, arg) => callback(arg))