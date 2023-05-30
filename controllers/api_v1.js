const express = require('express');

const { users_schema } = require('../data/db_v1');

const api_v1 = express.Router();

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Retrieve users
 *     description: Get a list of users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
api_v1.get('/users', (_req, res) => {
    res.json(users_schema)
});

module.exports = api_v1;