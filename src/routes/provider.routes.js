const express = require('express');
const router = express.Router();
const providerController = require('../controllers/provider.controller');
const providerValidator = require('../validators/provider.validator');
const handleAuthorization = require('../middlewares/handleAuthorization');

router.use(handleAuthorization);
router.get('/', providerController.getAll);
router.get('/:id', providerValidator.getById(), providerController.getById);
router.post('/', providerValidator.create(), providerController.create);
router.put('/:id', providerValidator.update(), providerController.update);
router.delete('/:id', providerValidator.destroy(), providerController.destroy);

module.exports = router;
