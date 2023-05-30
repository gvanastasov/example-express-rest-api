const express = require("express");

const { install } = require("./plugins");

const app = express();

install(app, "swagger");
install(app, "resource");

app.resource("/api/v1/users", require("./controllers/v1/users-controller"));

module.exports = { app };
