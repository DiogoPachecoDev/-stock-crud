const userRepository = require('../repositories/user.repository');

const create = async function(user) {
    const userCreated = await userRepository.create(user);
    return userCreated;
}

module.exports = {
    create
}