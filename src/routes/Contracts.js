"use strict";
const express = require("express");
const router = express.Router();
const contracts = require("../controllers/Contracts");

router.get("/:id", contracts.getContract);
router.get("", contracts.getAllContracts);

module.exports = router;
