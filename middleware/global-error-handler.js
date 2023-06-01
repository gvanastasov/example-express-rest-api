const { httpStatusCodes } = require("../utils/http-status-codes");

/**
 * @typedef {import('express').Request} ExpressRequest
 * @typedef {import('express').Response} ExpressResponse
 */

/**
 * @param {*} req 
 * @param {*} _res 
 * @param {ExpressResponse} res 
 */
const globalErrorHandler = function(err, _req, res) {
    const statusCode = err.statusCode || httpStatusCodes.SERVER_ERROR.INTERNAL;

    res.status(statusCode);

    const errorResponse = {
        message: err.message || "Internal Server Error",
        error: err
    };

    res.json(errorResponse);
};

module.exports = { globalErrorHandler };
