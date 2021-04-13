const uniqueValidator = require('mongoose-unique-validator')
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: [true, 'Please add your username']
    },
    expenses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expense'
    }
});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);