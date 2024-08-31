const { Item } = require('../database/models/index');

const getAll = async function() {
    const itemsList = await Item.findAll();
    return itemsList;
}

const getById = async function(id) {
    const itemData = await Item.findByPk(id);
    return itemData;
}

const getByFilter = async function(filter) {
    const itemData = await Item.findOne({ where: filter });
    return itemData;
}

const create = async function(item) {
    const itemCreated = await Item.create(item);
    return itemCreated;
}

const update = async function(item, id) {
    const itemUpdated = await Item.update(item, { where: { id: id } });
    return itemUpdated;
}

const destroy = async function(id) {
    const itemDestroyed = await Item.destroy({ where: { id: id } });
    return itemDestroyed;
}

module.exports = {
    getAll,
    getById,
    getByFilter,
    create,
    update,
    destroy
}
