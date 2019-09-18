const {ipcRenderer} = require('electron')


window.API = {}
window.API.subscribe = {}
window.API.get = {}
window.API.unsubscribe = {}

//Get date
window.API.subscribe.get_date = (callback) => ipcRenderer.on('get_date-reply', (event, arg) => callback(arg))
window.API.get.date = () => ipcRenderer.send('get_date')
window.API.unsubscribe.get_date = (callback) => ipcRenderer.removeListener('get_date-reply', callback)

//Create character
window.API.subscribe.create_character = (callback) => ipcRenderer.on('create_character-reply', (event, arg) => callback(arg))
window.API.get.create_character = (name) => {
  console.log(name);
  ipcRenderer.send('create_character', name);
}
window.API.unsubscribe.create_character = (callback) => ipcRenderer.removeListener('create_character-reply', callback)




//
// window.API.subscribe.get_character = (callback) => ipcRenderer.on('get_character-reply', (event, arg) => callback(arg))
// window.API.subscribe.delete_character = (callback) => ipcRenderer.on('delete_character-reply', (event, arg) => callback(arg))
//
//
//
// window.API.get.get_character = () => ipcRenderer.send('get_character')
// window.API.get.delete_character = () => ipcRenderer.send('delete_character')
//
//
//
// window.API.unsubscribe.get_character = (callback) => ipcRenderer.removeListener('get_character-reply', callback)
// window.API.unsubscribe.delete_character = (callback) => ipcRenderer.removeListener('delete_character-reply', callback)