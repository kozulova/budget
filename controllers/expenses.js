const Expense = require('../models/expenses');
const startOfDay = require('date-fns/startOfDay');
const endOfDay = require('date-fns/endOfDay');

exports.getExpenses = async (req, res, next) => {
    try{
        const user = req.query.userName || 'elvis';
        const date = new Date(req.query.date);
        const expenses = await Expense.find({date: {$gte: startOfDay(date), $lt: endOfDay(date)}, userName: user});
        return res.status(200).json({success: true,
             data: expenses});
    }catch(err){
        return res.status(500).json({success: false, err});
    }
}
exports.addExpense =  async (req, res, next) => {
    console.log(req.body);
    try{
        const {category, amount, date, userName} = req.body;
        const expense = await Expense.create(req.body);
        return res.status(201).json({
            success: true,
            data: expense
        })
    }catch(err){
        return res.status(400).json({
            success: false,
            err: "err"
        })
    }
}

exports.deleteExpence = async (req, res, next) => {
    try{
        const id = req.params.id;
        const expense = await Expense.findById(id);
        console.log(expense);
        if(!expense){
            return res.status(404).json({
                success: false,
                error: "no expence found"
            })
        }

        await expense.remove();
        return res.status(200).json({
            success: true,
            data: {}
        })

    }catch(err){
        return res.status(400).json({
            success: false,
            err
        })
    }
}

exports.updateExpence = async (req, res, next) => {
    try{
        const expense = await Expense.findByIdAndUpdate(req.params.id, req.body);

        if(!expense){
            return res.status(404).json({
                success: false,
                error: "no expence found"
            })
        }

       return res.status(201).json({"success": true, data: expense});

    }catch(err){
        return res.status(400).json({
            success: false,
            err
        })
    }
    return res.send('Update expence');
}
