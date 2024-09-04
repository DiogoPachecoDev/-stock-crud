const authRepository = require('../repositories/auth.repository');
const createError = require('http-errors');
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
require('dotenv').config();

const login = async function(auth) {
    const authCredentials = await authRepository.login({ email: auth.email });

    if(!authCredentials) {
        return createError(401, 'Incorrect credentials');
    }

    const validatePassword = await bcrypt.compare(auth.password, authCredentials.password);

    if(!validatePassword) {
        return createError(401, 'Incorrect credentials');
    }
    
    const token = sign({ id: authCredentials.id }, process.env.SECRET, { expiresIn: 1000 });

    delete authCredentials.dataValues.password;

    return {
        auth: true,
        token: token,
        user: authCredentials
    };
}

module.exports = {
    login
}
