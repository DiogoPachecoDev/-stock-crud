const express = require('express');
const router = express.Router();
const exitController = require('../controllers/exit.controller');
const exitValidator = require('../validators/exit.validator');
const handleAuthorization = require('../middlewares/handleAuthorization');

router.use(handleAuthorization);
router.get('/', exitController.getAll);
router.get('/:id', exitValidator.getById(), exitController.getById);
router.post('/', exitValidator.create(), exitController.create);

module.exports = router;
