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
module.exports.get = function (_req, res, next) {
    query("users")
        .select()
        .then((x) => {
            res.json(x);
        })
        .catch((err) => {
            next(err);
        });
};

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Retrieve a user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       404:
 *         description: User not found
 */
module.exports.getById = function (req, res, next) {
    query("users")
        .select()
        .where("id", "=", req.params.id)
        .first()
        .then((user) => {
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: "User not found" });
            }
        })
        .catch((err) => {
            next(err);
        });;
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
