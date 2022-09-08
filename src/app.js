const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const ContractsRoutes = require("./routes/Contracts");

const app = express();

// Commons
app.use(bodyParser.json());
app.set("sequelize", sequelize);
app.set("models", sequelize.models);

// Routes
app.use(ContractsRoutes);

module.exports = app;
