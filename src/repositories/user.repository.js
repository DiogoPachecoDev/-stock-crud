const db = require('../database/models/index');
const { User } = require('../database/models/index');

const create = async function(user) {
    const userCreated = await User.create(user);
    return userCreated;
}

module.exports = {
    create
}