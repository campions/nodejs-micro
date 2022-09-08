"use strict";
const express = require("express");
const router = express.Router();
const contracts = require("../controllers/Contracts");
const { getProfile } = require("../middleware/getProfile");

const routes = () => {
  router.get("/contracts/:id", getProfile, contracts.getContract);
};

module.exports = routes;
