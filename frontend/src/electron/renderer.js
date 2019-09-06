// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const zerorpc = require("zerorpc");
let client = new zerorpc.Client();
client.connect("tcp://127.0.0.1:4242");