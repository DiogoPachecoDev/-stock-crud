const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const userValidator = require('../validators/user.validator');

router.get('/', userController.getAll);
router.get('/:id', userValidator.getById(), userController.getById);
router.post('/login', userValidator.login(), userController.login);
router.post('/', userValidator.create(), userController.create);
router.put('/:id', userValidator.update(), userController.update);
router.delete('/:id', userValidator.destroy(), userController.destroy);

module.exports = router;
