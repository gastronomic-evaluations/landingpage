require('dotenv').config();
const express = require('express');
const http = require('http')
const app = express();

app.use(express.static('public'));

http
  .createServer(app)
  .listen(process.env.PORT);


