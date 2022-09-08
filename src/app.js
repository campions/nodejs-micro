const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const ContractsRoutes = require("./routes/Contracts");
const JobsRoutes = require("./routes/Jobs");
const BalancesRoutes = require("./routes/Balances");
const AdminRoutes = require("./routes/Admin");
const { getProfile } = require("./middleware/getProfile");

const app = express();

// Commons
app.use(bodyParser.json());
app.set("sequelize", sequelize);
app.set("models", sequelize.models);

// Routes
app.use("/contracts", getProfile, ContractsRoutes);
app.use("/jobs", getProfile, JobsRoutes);
app.use("/balances", getProfile, BalancesRoutes);
app.use("/admin", getProfile, AdminRoutes);

module.exports = app;
