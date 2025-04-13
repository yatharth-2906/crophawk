const express = require('express');
const {handleHomePage} = require('../controllers/static');

const staticRouter = express.Router();

staticRouter.route('/')
.get(handleHomePage)

module.exports = staticRouter;