const db = require('../database/models/index');
const { User } = require('../database/models/index');

const getById = async function(id) {
    const userData = await User.findByPk(id);
    return userData;
}

const create = async function(user) {
    const userCreated = await User.create(user);
    return userCreated;
}

module.exports = {
    getById,
    create
}
