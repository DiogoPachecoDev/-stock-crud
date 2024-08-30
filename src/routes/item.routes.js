const express = require('express')
const router = express.Router();
const itemController = require('../controllers/item.controller');

router.get('/', itemController.get);

module.exports = router;
