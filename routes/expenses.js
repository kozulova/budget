const express = require('express');
const expenseRouter = express.Router();
const {getExpenses, addExpense, deleteExpence, updateExpense} = require('../controllers/expenses')

expenseRouter.route('/').get(getExpenses).post(addExpense);
expenseRouter.route('/:id').delete(deleteExpence).put(updateExpense);

module.exports = expenseRouter;