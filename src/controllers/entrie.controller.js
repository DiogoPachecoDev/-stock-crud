const { validationResult } = require('express-validator');
const entrieService = require('../services/entrie.service');
const createErrors = require('http-errors');

const getAll = async function(req, res, next) {
    try {
        const response = await entrieService.getAll();

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

        const response = await entrieService.getById(req.params.id);

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

        const response = await entrieService.create({ 
            quantity: req.body.quantity, 
            price: req.body.price, 
            item_id: req.body.item_id, 
            provider_id: req.body.provider_id, 
            user_id: req.user_id
        });

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
