"use strict";
const express = require("express");
const router = express.Router();
const balances = require("../controllers/Balances");

router.post("/deposit/:userId", balances.deposit);

module.exports = router;
