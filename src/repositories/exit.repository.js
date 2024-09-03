const { Exit, Item, User } = require('../database/models/index');

const getAll = async function() {
    const exitsList = await Exit.findAll({
        include: [
            { model: Item, as: 'item' }, 
            { model: User, as: 'user' }
        ]
    });
    return exitsList;
}

const getById = async function(id) {
    const exitData = await Exit.findByPk(id);
    return exitData;
}

const getByFilter = async function(filter) {
    const exitData = await Exit.findOne({ 
        where: filter,
        include: [
            { model: Item, as: 'item' }, 
            { model: User, as: 'user' }
        ]
    });
    return exitData;
}

const create = async function(exit) {
    const exitCreated = await Exit.create(exit);
    return exitCreated;
}

module.exports = {
    getAll,
    getById,
    getByFilter,
    create
}
