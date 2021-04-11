const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/expenses');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dotenv.config();
connectDB();

app.use('/expenses', router);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname + 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT;

app.listen(PORT, ()=>console.log(`Server is lisening on port ${PORT}`))