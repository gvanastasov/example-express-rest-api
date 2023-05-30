const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     user:
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
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
});

const model = mongoose.model("user", userSchema);

module.exports = model;
