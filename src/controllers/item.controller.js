const { validationResult } = require('express-validator');
const itemService = require('../services/item.service');
const createErrors = require('http-errors');

const getAll = async function(req, res, next) {
    try {
        const response = await itemService.getAll();

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

        const response = await itemService.getById(req.params.id);

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

        const response = await itemService.create({ name: req.body.name, user_id: req.user_id });

        res.status(201).send(response);
    } catch (error) {
        return next(error);
    }
}

const update = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            throw createErrors(422, { errors: errors.array() })
        }

        const response = await itemService.update({ name: req.body.name }, req.params.id);

        if(response && response.message) {
            throw response;
        }

        res.status(204).send(response);
    } catch (error) {
        return next(error);
    }
}

const destroy = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            throw createErrors(422, { errors: errors.array() })
        }

        const response = await itemService.destroy(req.params.id);

        if(response && response.message) {
            throw response;
        }

        res.status(202).send(response);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    destroy
}
