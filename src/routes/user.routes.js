const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const userValidator = require('../validators/user.validator');

router.get('/', userController.getAll);
router.get('/:id', userValidator.getById(), userController.getById);
router.post('/', userValidator.create(), userController.create);

module.exports = router;
