const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const getById = function() {
    return [
        param('id', validatorMessage('id')).exists().bail().isInt()
    ]
}

const create = function() {
    return [
        body('quantity', validatorMessage('quantity')).exists().bail().isInt(),
        body('price', validatorMessage('price')).exists().bail().isFloat(),
        body('item_id', validatorMessage('item_id')).exists().bail().isInt(),
        body('provider_id', validatorMessage('provider_id')).optional({ nullable: true }).isInt()
    ]
}

module.exports = {
    create,
    getById
}
