const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const getById = function() {
    return [
        param('id', validatorMessage('id')).exists().bail().isInt()
    ]
}

const create = function() {
    return [
        body('name', validatorMessage('name')).exists().bail().isString()
    ]
}

const update = function() {
    return [
        body('name', validatorMessage('name')).exists().bail().isString(),
    ]
}

const destroy = function() {
    return [
        param('id', validatorMessage('id')).exists().bail().isInt()
    ]
}

module.exports = {
    create,
    getById,
    update,
    destroy
}
