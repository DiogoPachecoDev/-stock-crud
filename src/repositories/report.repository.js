const { sequelize } = require('../database/models/index');
const { QueryTypes } = require('sequelize');

const entrieExit = async function(filters) {
    const query = ` SELECT * 
                    FROM (SELECT items.name, entries.quantity, "Entrie" AS type, entries.price, entries.createdAt
                         FROM   items
                         JOIN   entries ON items.id = entries.item_id
                         WHERE  items.deletedAt IS NULL
                         AND    entries.deletedAt IS NULL

                         UNION

                         SELECT items.name, exits.quantity, "Exit" AS type, 0 AS price, exits.createdAt
                         FROM   items
                         JOIN   exits ON items.id = exits.item_id
                         WHERE  items.deletedAt IS NULL
                         AND    exits.deletedAt IS NULL) AS rp
                    WHERE 1
                    ${filters}
                    ORDER BY rp.createdAt DESC`;

    const data = await sequelize.query(query, {
        raw: true,
        type: QueryTypes.SELECT
    });

    return data;
}

module.exports = {
    entrieExit
}
