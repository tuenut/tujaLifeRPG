const {ipcRenderer} = require('electron')


window.API = {}
window.API.subscribe = {}
window.API.get = {}

window.API.subscribe.get_date = (callback) => ipcRenderer.on('get_date-reply', (event, arg) => callback(arg))
window.API.subscribe.create_character = (callback) => ipcRenderer.on('create_character-reply', (event, arg) => callback(arg))
window.API.subscribe.get_character = (callback) => ipcRenderer.on('get_character-reply', (event, arg) => callback(arg))
window.API.subscribe.delete_character = (callback) => ipcRenderer.on('delete_character-reply', (event, arg) => callback(arg))

window.API.get.date = () => ipcRenderer.send('get_date')
window.API.get.create_character = () => ipcRenderer.send('create_character')
window.API.get.get_character = () => ipcRenderer.send('get_character')
window.API.get.delete_character = () => ipcRenderer.send('delete_character')
