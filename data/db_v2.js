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
 *         email:
 *           type: string
 *           description: The email of the user.
 *       example:
 *         name: John
 *         email: example@email.com
 */
var users_schema = [];

users_schema.push({ name: faker.internet.userName(), email: faker.internet.email() });
users_schema.push({ name: faker.internet.userName(), email: faker.internet.email() });
users_schema.push({ name: faker.internet.userName(), email: faker.internet.email() });

module.exports = { users_schema };