const swaggerJsdoc  = require('swagger-jsdoc'),
    swaggerUi       = require('swagger-ui-express');

const { getSwaggerOptions } = require('../config/swagger.conf');

const swagger = function(app) {
    const swaggerSpecV1 = swaggerJsdoc(getSwaggerOptions('v1'));

    app.get('/api-docs/v1.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpecV1);
    });

    var swaggerUIOptions = {
        explorer: true,
        swaggerOptions: {
        urls: [
                {
                    url: 'http://localhost:3000/api-docs/v1.json',
                    name: 'Spec1'
                }
            ]
        }
    }

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, swaggerUIOptions));
}

module.exports = swagger