const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const itemRoute = require('./src/routes/item.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/items', itemRoute);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});