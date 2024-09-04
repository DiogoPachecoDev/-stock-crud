const createError = require('http-errors');
const entrieRepository = require('../repositories/entrie.repository');
const itemRepository = require('../repositories/item.repository');
const providerRepository = require('../repositories/provider.repository');

const getAll = async function() {
    const entrieList = await entrieRepository.getAll();
    return entrieList;
}

const getById = async function(id) {
    const entrieData = await entrieRepository.getById(id);

    if(!entrieData) {
        return createError(404, 'Entrie not found');
    }

    return entrieData;
}

const create = async function(entrie) {
    const existsItem = await itemRepository.getById(entrie.item_id);

    if(!existsItem) {
        return createError(404, 'Item not exists');
    }

    if(entrie.provider_id) {
        const existsProvider = await providerRepository.getById(entrie.provider_id);

        if(!existsProvider) {
            return createError(404, 'Item not exists');
        }
    }

    const entrieCreated = await entrieRepository.create(entrie);
    const newQuantity = entrieCreated.quantity + existsItem.quantity;

    await itemRepository.update({ quantity: newQuantity }, existsItem.id);

    return entrieCreated;
}

module.exports = {
    getAll,
    getById,
    create
}
