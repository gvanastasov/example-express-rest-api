const { query } = require("../../db");

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
 *                 $ref: '#/components/schemas/user'
 */
module.exports.get = function (_req, res) {
    query("users").select().then((x) => {
        console.log(x);
    });
    res.json({ result: "get_all" });
};

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Retrieve user
 *     description: Get user by id.
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/user'
 */
module.exports.getById = function (_req, res) {
    res.json({ result: "get_by_id" });
};

/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     summary: Retrieve user
 *     description: Get user by id.
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/user'
 */
module.exports.create = function(_req, res) {
    res.json({ result: "created" });
};

/**
 * @swagger
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Retrieve user
 *     description: Get user by id.
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/user'
 */
module.exports.delete = function(_req, res) {
    res.json({ result: "deleted" });
};
