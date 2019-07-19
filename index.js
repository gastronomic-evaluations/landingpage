require('dotenv').config();
const express = require('express');
const http = require('http')
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

http
  .createServer(app)
  .listen(process.env.PORT);


