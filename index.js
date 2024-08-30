const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const handle404Error = require('./src/middlewares/handle404Error');
const itemRoute = require('./src/routes/item.routes');
const userRoute = require('./src/routes/user.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/items', itemRoute);
app.use('/users', userRoute);
app.use(handle404Error);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});
