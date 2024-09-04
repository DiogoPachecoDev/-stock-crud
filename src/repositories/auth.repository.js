const { User } = require('../database/models/index');

const login = async function(filter) {
    const authData = await User.findOne({ where: filter });
    return authData;
}

module.exports = {
    login
}
