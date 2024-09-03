const createError = require('http-errors');
const exitRepository = require('../repositories/exit.repository');
const itemRepository = require('../repositories/item.repository');

const getAll = async function() {
    const exitList = await exitRepository.getAll();
    return exitList;
}

const getById = async function(id) {
    const exitData = await exitRepository.getById(id);

    if(!exitData) {
        return createError(404, 'Exit not found');
    }

    return exitData;
}

const create = async function(exit) {
    const existsItem = await itemRepository.getById(exit.item_id)

    if(!existsItem) {
        return createError(404, 'Item not exists');
    }

    const newQuantity = existsItem.quantity - exit.quantity;

    if(newQuantity < 0) {
        return createError(400, 'The exits quantity is greater than the quantity in stock')
    }
    
    const exitCreated = await exitRepository.create(exit);
    await itemRepository.update({ quantity: newQuantity }, existsItem.id);

    return exitCreated;
}

module.exports = {
    getAll,
    getById,
    create
}
