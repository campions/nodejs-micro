const express = require('express');

const router = express.Router();
const jobs = require('../controllers/Jobs');

router.get('/unpaid', jobs.getUnpaidJobs);
router.post('/:job_id/pay', jobs.payJob);

module.exports = router;
