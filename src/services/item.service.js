const createError = require('http-errors');
const itemRepository = require('../repositories/item.repository');

const getAll = async function() {
    const itemList = await itemRepository.getAll();
    return itemList;
}

const getById = async function(id) {
    const itemData = await itemRepository.getById(id);

    if(!itemData) {
        return createError(404, 'Item not found');
    }

    return itemData;
}

const create = async function(item) {
    const itemCreated = await itemRepository.create(item);
    return itemCreated;
}

const update = async function(item, id) {
    const existsItem = await itemRepository.getById(id);

    if(!existsItem) {
        return createError(404, 'item not found');
    }

    await itemRepository.update(item, id);
    const itemUpdated = await itemRepository.getById(id);

    return itemUpdated;
}

const destroy = async function(id) {
    const existsItem = await itemRepository.getById(id);

    if(!existsItem) {
        return createError(404, 'Item not found');
    }

    await itemRepository.destroy(id);

    return existsItem;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    destroy,
}
