const { query, ENTITY } = require("../../db");
const { httpStatusCodes } = require("../../utils/http-status-codes");
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
module.exports.get = async function (_req, res, next) {
    try {
        let users = await query(ENTITY.USER)
            .select();
    
        res.json(users);
    } catch(err) {
        next(err);
    }
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
module.exports.getById = async function (req, res, next) {
    try {
        const user = await query(ENTITY.USER)
            .select()
            .where({ id: req.params.id })
            .first();

        if (user) {
            res.json(user);
        } else {
            res
                .status(httpStatusCodes.SUCCESS.OK)
                .json({ error: "User not found" });
        }
    } catch (err) {
        next(err);
    }
};

/**
 * @swagger
 * /api/v1/users/{id}:
 *   patch:
 *     summary: Update user
 *     description: Update an existing user by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the user to update.
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/userPatchRequestBody'
 *     responses:
 *       204:
 *         description: User updated successfully.
 *       404:
 *         description: User not found.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     userPatchRequestBody:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: The updated username of the user.
 *         email:
 *           type: string
 *           description: The updated email address of the user.
 */

/**
 * @remarks
 *      - no sanity checks on user input, beyound purpose of example.
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports.update = async function(req, res, next) {
    const { username, email } = req.body;
    
    try {
        const updatedCount = await query(ENTITY.USER)
            .where({ id: req.params.id })
            .first()
            .update({ username, email });

        if (updatedCount === 0) {
            return res
                .status(httpStatusCodes.CLIENT_ERROR.NOT_FOUND)
                .json({ error: "User not found" });
        }

        res.sendStatus(httpStatusCodes.SUCCESS.NO_CONTENT);
    } catch (err) {
        next(err);
    }
};

/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     summary: Create user
 *     description: Create user by providing email and username.
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
module.exports.create = async function(req, res, next) {
    const { username, email } = req.body;

    try {
        const existingUser = await query(ENTITY.USER)
            .where({ username: username })
            .first();
        if (existingUser) {
            return res
                .status(httpStatusCodes.CLIENT_ERROR.NOT_FOUND)
                .json({ error: "Username already taken." });
        }

        const [newUser] = await query(ENTITY.USER)
            .insert({ username, email })
            .returning("*");
        
        res
            .status(httpStatusCodes.SUCCESS.CREATED)
            .json(newUser);

    } catch (err) {
        next(err);
    }
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
module.exports.delete = async function(req, res, next) {
    try {
        const deletedCount = await query(ENTITY.USER)
            .where({ id: req.params.id })
            .del();

        if (deletedCount === 0) {
            return res
                .status(httpStatusCodes.CLIENT_ERROR.NOT_FOUND)
                .json({ error: "User not found" });
        }

        res
            .sendStatus(httpStatusCodes.SUCCESS.NO_CONTENT);
    } catch (err) {
        next(err);
    }
};
