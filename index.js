var express = require('express');
var http = require('http')
var app = express();

app.use(express.static('public'));

const server = http.createServer(app);
server.listen(5002, () => console.log(`Running on port ${5002}`));


