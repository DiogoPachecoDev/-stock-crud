const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const getById = function() {
    return [
        param('id', validatorMessage('id')).exists().bail().isInt()
    ]
}

const create = function() {
    return [
        body('name', validatorMessage('name')).exists().bail().isString(),
        body('email', validatorMessage('email')).exists().bail().isString(),
        body('phone', validatorMessage('phone')).exists().bail().isString()
    ]
}

const update = function() {
    return [
        body('name', validatorMessage('name')).exists().bail().isString(),
        body('email', validatorMessage('email')).exists().bail().isString(),
        body('phone', validatorMessage('phone')).exists().bail().isString(),
        param('id', validatorMessage('id')).exists().bail().isInt()
    ]
}

const destroy = function() {
    return [
        param('id', validatorMessage('id')).exists().bail().isInt()
    ]
}

module.exports = {
    getById,
    create,
    update,
    destroy
}
