const { Provider } = require('../database/models/index');

const getAll = async function() {
    const providersList = await Provider.findAll();
    return providersList;
}

const getById = async function(id) {
    const providerData = await Provider.findByPk(id);
    return providerData;
}

const getByFilter = async function(filter) {
    const providerData = await Provider.findOne({ where: filter });
    return providerData;
}

const create = async function(provider) {
    const providerCreated = await Provider.create(provider);
    return providerCreated;
}

const update = async function(provider, id) {
    const providerUpdated = await Provider.update(provider, { where: { id: id } });
    return providerUpdated;
}

const destroy = async function(id) {
    const providerDestroyed = await Provider.destroy({ where: { id: id } });
    return providerDestroyed;
}

module.exports = {
    getAll,
    getById,
    getByFilter,
    create,
    update,
    destroy
}
