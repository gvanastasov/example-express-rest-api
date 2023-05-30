const express = require("express");

const { install } = require("../../plugins");

const api_v1 = express.Router();
install(api_v1, "resource");

api_v1.resource("/users", require("./users-controller"));

module.exports = api_v1;


