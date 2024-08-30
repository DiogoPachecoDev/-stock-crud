const userService = require('../services/user.service');

const getById = async function(req, res) {
    const userData = await userService.getById(req.params.id);
    res.status(200).send(userData);
}

const create = async function(req, res) {
    const userCreated = await userService.create(req.body);
    res.status(200).send(userCreated);
}

module.exports = {
    getById,
    create
}
