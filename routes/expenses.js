const express = require('express');
const router = express.Router();
const {getExpenses, addExpense, deleteExpence, updateExpence} = require('../controllers/expenses')

router.route('/').get(getExpenses).post(addExpense);
router.route('/:id').delete(deleteExpence).put(updateExpence);

router.get('/', (req, res) => {
    res.send("Router")
})

router.get('/api/expenses', (req,res)=>{
    const expenses = [
        {id: 1, category: 'food', amount: 75, date: new Date()},
        {id: 2, category: 'sport', amount: 100, date: new Date()},
        {id: 3, category: 'education', amount: 200, date: new Date()},
    ]
    res.send(expenses)
})

module.exports = router;