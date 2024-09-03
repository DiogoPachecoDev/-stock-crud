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
        body('item_id', validatorMessage('user_id')).exists().bail().isInt()
    ]
}

module.exports = {
    create,
    getById
}
