const express = require('express');
const router = express.Router();
const {getExpenses, addExpense, deleteExpence, updateExpence} = require('../controllers/expenses')

router.route('/').get(getExpenses).post(addExpense);
router.route('/:id').delete(deleteExpence).put(updateExpence);

router.get('/', (req, res) => {
    res.send("Router")
})

module.exports = router;