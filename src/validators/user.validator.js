const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const create = function() {
    return [
        body('name', validatorMessage('name')).exists().bail().isString(),
        body('email', validatorMessage('email')).exists().bail().isString(),
        body('password', validatorMessage('password')).exists().bail().isString()
    ]
}

const getById = function() {
    return [
        param('id', validatorMessage('id')).exists().bail().isInt()
    ]
}

module.exports = {
    create,
    getById
}
