/**
 * @swagger
 * components:
 *   schemas:
 *     user:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier.
 *         username:
 *           type: string
 *           description: The first name of the user.
 *         email:
 *           type: string
 *           description: The email of the user.
 *       example:
 *         id: 1
 *         username: admin
 *         email: admin@mail.com
 */
const User = function(id = "", username = "", email = "") {
    this.id = id;
    this.username = username;
    this.email = email;
};

module.exports = User;