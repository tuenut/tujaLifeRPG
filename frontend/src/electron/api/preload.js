const {ipcRenderer} = require('electron')


window.API = {}
window.API.subscribe = {}
window.API.get = {}

window.API.subscribe.get_date = (callback) => ipcRenderer.on('get_date-reply', (event, arg) => callback(arg))
window.API.subscribe.create_character = (callback) => ipcRenderer.on('create_character-reply', (event, arg) => callback(arg))
window.API.subscribe.get_quest_collection = (callback) => ipcRenderer.on('get_quest_collection-reply', (event, arg) => callback(arg))
window.API.subscribe.create_quest = (callback) => ipcRenderer.on('create_quest-reply', (event, arg) => callback(arg))

window.API.get.date = () => ipcRenderer.send('get_date')
window.API.get.create_character = () => ipcRenderer.send('create_character')
window.API.get.get_quest_collection = () => ipcRenderer.send('get_quest_collection')
window.API.get.create_quest = () => ipcRenderer.send('create_quest')