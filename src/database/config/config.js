require('dotenv').config({ path: __dirname + './../../../.env' });

module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DIALECT,
        logging: false,
        timezone: '-03:00',
        define: {
            timestamps: true
        },
    }
}
