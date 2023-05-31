const express = require("express");

const { install } = require("../../plugins");
const { convertParamToInteger } = require("../../middleware/converter-middleware");
const { isPositive } = require("../../middleware/validation-middleware");

const api_v1 = express.Router();
install(api_v1, "resource");

api_v1.resource("/users", require("./users-controller"));

api_v1.param("id", convertParamToInteger);
api_v1.param("id", isPositive);

module.exports = api_v1;


