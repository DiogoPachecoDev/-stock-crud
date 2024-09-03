const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report.controller');
const handleAuthorization = require('../middlewares/handleAuthorization');

router.use(handleAuthorization);
router.get('/entrieExit', reportController.entrieExit);

module.exports = router;
