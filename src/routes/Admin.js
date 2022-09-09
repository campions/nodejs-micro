const express = require('express');

const router = express.Router();
const admin = require('../controllers/Admin');

router.get('/best-profession', admin.getBestProfession);
router.get('/best-clients', admin.getBestClients);

module.exports = router;
