const { Entrie, Item, User } = require('../database/models/index');

const getAll = async function() {
    const entriesList = await Entrie.findAll([{
        include: [
            { model: Item, as: 'item' }, 
            { model: User, as: 'user' }
        ]
    }]);
    return entriesList;
}

const getById = async function(id) {
    const entrieData = await Entrie.findByPk(id);
    return entrieData;
}

const getByFilter = async function(filter) {
    const entrieData = await Entrie.findOne({ 
        where: filter,
        include: [
            { model: Item, as: 'item' }, 
            { model: User, as: 'user' }
        ]
    });
    return entrieData;
}

const create = async function(entrie) {
    const entrieCreated = await Entrie.create(entrie);
    return entrieCreated;
}

module.exports = {
    getAll,
    getById,
    getByFilter,
    create
}