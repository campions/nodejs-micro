"use strict";
const express = require("express");
const router = express.Router();
const admin = require("../controllers/Admin");

router.post("/best-profession", admin.getBestProfession);
router.post("/best-clients", admin.getBestClients);

module.exports = router;
