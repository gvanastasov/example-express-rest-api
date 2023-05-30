'use strict'

const { faker } = require('@faker-js/faker');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The first name of the user.
 *       example:
 *         name: John
 */
var users_schema = [];

users_schema.push({ name: faker.internet.userName() });
users_schema.push({ name: faker.internet.userName() });
users_schema.push({ name: faker.internet.userName() });

module.exports = { users_schema };