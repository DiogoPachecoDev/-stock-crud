const userRepository = require('../repositories/user.repository');

const getById = async function(id) {
    const userData = await userRepository.getById(id);
    return userData;
}

const create = async function(user) {
    const userCreated = await userRepository.create(user);
    return userCreated;
}

module.exports = {
    getById,
    create
}
