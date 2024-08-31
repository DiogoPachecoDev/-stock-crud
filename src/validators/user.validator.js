const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const getById = function() {
    return [
        param('id', validatorMessage('id')).exists().bail().isInt()
    ]
}

const create = function() {
    return [
        body('name', validatorMessage('name')).exists().bail().isString().bail(),
        body('email', validatorMessage('email')).exists().bail().isString(),
        body('password', validatorMessage('password')).exists().bail().isString()
    ]
}

const update = function() {
    return [
        param('id', validatorMessage('id')).exists().bail().isInt(),
        body('name', validatorMessage('name')).exists().bail().isString()
    ]
}

module.exports = {
    create,
    getById,
    update
}
