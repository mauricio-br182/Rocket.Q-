const express = require('express');
const path = require('path');
const router = require('./Router');

const server = express();


server.set('view engine', 'ejs')
server.use(express.static('public'))
server.set('views', path.join(__dirname, 'views'))
server.use(express.urlencoded({extended: true}));
server.use(router)
server.listen(3000, () => console.log('Runing'))