const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const userValidator = require('../validators/user.validator');
const handleAuthorization = require('../middlewares/handleAuthorization');

router.get('/', handleAuthorization,userController.getAll);
router.get('/:id', handleAuthorization,userValidator.getById(), userController.getById);
router.post('/login', userValidator.login(), userController.login);
router.post('/', handleAuthorization,userValidator.create(), userController.create);
router.put('/:id', handleAuthorization,userValidator.update(), userController.update);
router.delete('/:id', handleAuthorization,userValidator.destroy(), userController.destroy);

module.exports = router;
