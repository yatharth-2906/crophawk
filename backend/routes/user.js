const express = require('express');
const {handleUserSignup, handleUserLogin, checkUserLoginStatus} = require('../controllers/user');

const userRouter = express.Router();

userRouter.route('/')
.post(handleUserSignup);

userRouter.route('/login')
.get(checkUserLoginStatus)
.post(handleUserLogin);

module.exports = userRouter;