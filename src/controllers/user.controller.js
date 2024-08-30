const userService = require('../services/user.service');

const create = async function(req, res) {
    const userCreated = await userService.create(req.body);
    res.status(200).send(userCreated);
}

module.exports = {
    create
}