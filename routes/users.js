const express = require('express');
const userRouter = express.Router();
const {getUser, addUser, updateUser, deleteUser, getUserByUserName} = require('../controllers/users')

userRouter.route('/').get(getUser).post(addUser);
userRouter.route('/:id').delete(deleteUser).put(updateUser);
userRouter.route('/:userName').get(getUserByUserName);

module.exports = userRouter;