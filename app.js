const express = require('express');

const { install } = require('./plugins');

const app = express()

install(app, 'swagger');
install(app, 'resource');

app.use('/api/v1', require('./controllers/api_v1'));

module.exports = { app }