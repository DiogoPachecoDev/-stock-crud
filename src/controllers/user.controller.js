const { validationResult } = require('express-validator');
const userService = require('../services/user.service');
const createErrors = require('http-errors');

const getAll = async function(req, res, next) {
    try {
        const response = await userService.getAll();

        if(response && response.message) {
            throw response;
        }

        res.status(200).send(response);
    } catch (error) {
        return next(error);
    }
}

const getById = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            throw createErrors(422, { errors: errors.array() })
        }

        const response = await userService.getById(req.params.id);

        if(response && response.message) {
            throw response;
        }

        res.status(200).send(response);
    } catch (error) {
        return next(error);
    }
}

const create = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            throw createErrors(422, { errors: errors.array() })
        }

        const response = await userService.create(req.body);

        if(response && response.message) {
            throw response;
        }

        res.status(201).send(response);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getAll,
    getById,
    create
}
