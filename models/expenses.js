const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    category: {
        type: String,
        require: [true,'Please choose category']
    },
    amount: {
        type: Number,
        required: [true, 'Please add amount']
    },
    date: {
        type: Date,
        default: Date.now
    },
    userName: {
        type: String,
        required: [true, 'Please add username']
    }
})

module.exports = mongoose.model('Expense', ExpenseSchema);