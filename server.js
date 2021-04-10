const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/expenses');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dotenv.config();
connectDB();

app.use('/expenses', router);

const PORT = 5000;

app.listen(PORT, ()=>console.log(`Server is lisening on port ${PORT}`))