const express       = require('express'),
    swaggerJsdoc    = require('swagger-jsdoc'),
    swaggerUi       = require('swagger-ui-express');

const { getSwaggerOptions } = require('./config/swagger.conf');

const swaggerSpecV1 = swaggerJsdoc(getSwaggerOptions('v1'));
const swaggerSpecV2 = swaggerJsdoc(getSwaggerOptions('v2'));

const app = express()

app.get('/api-docs/v1.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpecV1);
});

app.get('/api-docs/v2.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpecV2);
});

var swaggerUIOptions = {
    explorer: true,
    swaggerOptions: {
        urls: [
            {
                url: 'http://localhost:3000/api-docs/v1.json',
                name: 'Spec1'
            },
            {
                url: 'http://localhost:3000/api-docs/v2.json',
                name: 'Spec2'
            }
        ]
    }
}
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, swaggerUIOptions));

app.use('/api/v1', require('./controllers/api_v1'));
app.use('/api/v2', require('./controllers/api_v2'));

module.exports = { app }