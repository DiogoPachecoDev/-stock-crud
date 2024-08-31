const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');
const itemValidator = require('../validators/item.validator');
const handleAuthorization = require('../middlewares/handleAuthorization');

router.use(handleAuthorization);
router.get('/', itemController.getAll);
router.get('/:id', itemValidator.getById(), itemController.getById);
router.post('/', itemValidator.create(), itemController.create);
router.put('/:id', itemValidator.update(), itemController.update);
router.delete('/:id', itemValidator.destroy(), itemController.destroy);

module.exports = router;
