// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const {remote} = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})


// Use zerorpc to make requests to backend
const zerorpc = require("zerorpc");
let client = new zerorpc.Client();
client.connect("tcp://127.0.0.1:4242");

window.API = {}

// todo: need to use `const ipc = require('electron').ipcMain;` or something like that.
// todo: beacause granting full access to zerorpc client is bad idea. Need some wrappers for API methods, which returns some data.
window.API.client = client;