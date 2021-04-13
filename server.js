const express = require('express');
const dotenv = require('dotenv');
const expenseRouter = require('./routes/expenses');
const userRouter = require('./routes/users');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dotenv.config();
connectDB();

app.use('/expenses', expenseRouter);
app.use('/users', userRouter);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server is lisening on port ${PORT}`))