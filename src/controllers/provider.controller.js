const { validationResult } = require('express-validator');
const providerService = require('../services/provider.service');
const createErrors = require('http-errors');

const getAll = async function(req, res, next) {
    try {
        const response = await providerService.getAll();

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

        const response = await providerService.getById(req.params.id);

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

        const response = await providerService.create({ name: req.body.name, email: req.body.email, phone: req.body.phone });

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

        const response = await providerService.update({ name: req.body.name, email: req.body.email, phone: req.body.phone }, req.params.id);

        if(response && response.message) {
            throw response;
        }
        
        res.status(200).send(response);
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

        const response = await providerService.destroy(req.params.id);

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
