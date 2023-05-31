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
        });
};

/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     summary: Retrieve user
 *     description: Get user by id.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/userRequestBody'
 *     responses:
 *       201:
 *         description: User created.
 *       404:
 *         description: Username already exists.
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     userRequestBody:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: The first name of the user.
 *         email:
 *           type: string
 *           description: The email of the user.
 *       example:
 *         username: admin
 *         email: admin@mail.com
*/

/**
 * @remarks
 *      - no sanity checks on user input, beyound purpose of example.
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports.create = function(req, res, next) {
    const { username, email } = req.body;

    query("users")
        .where("username", username)
        .first()
        .then((existingUser) => {
            if (existingUser) {
                return res.status(404).json({ error: "Username already taken." });
            }

            query("users")
                .insert({ username, email })
                .returning("*")
                .then(([newUser]) => {
                    res.status(201).json(newUser);
                })
                .catch((err) => {
                    next(err);
                });
        });

};

/**
 * @swagger
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     description: Delete a user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       204:
 *         description: Operation successful.
 *       404:
 *         description: User not found.
 */
module.exports.delete = function(req, res, next) {
    query("users")
        .where("id", req.params.id)
        .del()
        .then((deletedCount) => {
            if (deletedCount === 0) {
                return res.status(404).json({ error: "User not found" });
            }

            res.sendStatus(204);
        })
        .catch((err) => {
            next(err);
        });
};
