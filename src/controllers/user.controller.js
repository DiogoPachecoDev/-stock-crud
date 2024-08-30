const userService = require('../services/user.service');

const getAll = async function(req, res) {
    const userList = await userService.getAll();
    res.status(200).send(userList);
}

const getById = async function(req, res) {
    const userData = await userService.getById(req.params.id);
    res.status(200).send(userData);
}

const create = async function(req, res) {
    const userCreated = await userService.create(req.body);
    res.status(201).send(userCreated);
}

module.exports = {
    getAll,
    getById,
    create
}
