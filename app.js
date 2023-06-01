const express = require("express");

const { install } = require("./plugins");
const { globalErrorHandler } = require("./middleware/global-error-handler");

const app = express();

install(app, "swagger");
install(app, "resource");

app.use(express.json());
app.use("/api/v1", require("./controllers/v1"));
app.use(globalErrorHandler);

module.exports = { app };
