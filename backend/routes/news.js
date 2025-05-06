const express = require('express');
const {getNews} = require('../controllers/news');

const newsRouter = express.Router();

newsRouter.route('/')
.get(getNews);

module.exports = newsRouter;