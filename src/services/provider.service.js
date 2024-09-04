const createError = require('http-errors');
const providerRepository = require('../repositories/provider.repository');

const getAll = async function() {
    const providerList = await providerRepository.getAll();
    return providerList;
}

const getById = async function(id) {
    const providerData = await providerRepository.getById(id);

    if(!providerData) {
        return createError(404, 'Provider not found');
    }

    return providerData;
}

const create = async function(provider) {
    const providerCreated = await providerRepository.create(provider);
    return providerCreated;
}

const update = async function(provider, id) {
    const existsProvider = await providerRepository.getById(id);

    if(!existsProvider) {
        return createError(404, 'Provider not found');
    }

    await providerRepository.update(provider, id);
    const providerUpdated = await providerRepository.getById(id);

    return providerUpdated;
}

const destroy = async function(id) {
    const existsProvider = await providerRepository.getById(id);

    if(!existsProvider) {
        return createError(404, 'Provider not found');
    }

    await providerRepository.destroy(id);

    return existsProvider;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    destroy
}
