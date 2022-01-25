const { dirname } = require('path');
var path = require('path');

var relativePath = './server.js';
var absolutePath = __dirname;

var serverPath = path.join(absolutePath,relativePath);

console.log(__filename);
console.log(absolutePath);
console.log(serverPath);
