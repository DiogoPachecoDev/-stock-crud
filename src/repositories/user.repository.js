const { User } = require('../database/models/index');

const getAll = async function() {
    const usersList = await User.findAll();
    return usersList;
}

const getById = async function(id) {
    const userData = await User.findByPk(id);
    return userData;
}

const getByFilter = async function(filter) {
    const userData = await User.findOne({ where: filter });
    return userData;
}

const create = async function(user) {
    const userCreated = await User.create(user);
    return userCreated;
}

const update = async function(user, id) {
    const userUpdated = await User.update(user, { where: { id: id } });
    return userUpdated;
}

const destroy = async function(id) {
    const userDestroyed = await User.destroy({ where: { id: id } });
    return userDestroyed;
}

module.exports = {
    getAll,
    getById,
    getByFilter,
    create,
    update,
    destroy
}
