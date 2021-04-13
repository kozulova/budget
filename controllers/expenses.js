const Expense = require('../models/expenses');
const startOfDay = require('date-fns/startOfDay');
const endOfDay = require('date-fns/endOfDay');
const User = require('../models/users');

exports.getExpenses = async (req, res, next) => {
    try{
        const userName = req.query.userName;
        const user = await User.findOne({userName});
        console.log(user)
        const date = new Date(req.query.date);
        const expenses = await Expense.find({date: {$gte: startOfDay(date), $lt: endOfDay(date)}, user: user});
        console.log(expenses);
        return res.status(200).json({success: true,
             data: expenses});
    }catch(err){
        return res.status(500).json({success: false, err});
    }
}
exports.addExpense =  async (req, res, next) => {
    try{
        const {category, amount, date, userName} = req.body;
        const user = await User.findOne({userName});
        const expense = await Expense.create({category, amount, date, user: user});
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

exports.updateExpense = async (req, res, next) => {
    try{
        const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {new: true});

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
}