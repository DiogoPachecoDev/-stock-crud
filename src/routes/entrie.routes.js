const express = require('express');
const router = express.Router();
const entrieController = require('../controllers/entrie.controller');
const entrieValidator = require('../validators/entrie.validator');
const handleAuthorization = require('../middlewares/handleAuthorization');

router.use(handleAuthorization);
router.get('/', entrieController.getAll);
router.get('/:id', entrieValidator.getById(), entrieController.getById);
router.post('/', entrieValidator.create(), entrieController.create);

module.exports = router;
