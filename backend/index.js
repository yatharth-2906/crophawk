require('dotenv').config({ path: './.env' });
const path = require('path');
const cors = require('cors');
const express = require('express');
const connectToMongoDB = require('./connect');

const cookieParser = require('cookie-parser');

const staticRouter = require('./routes/static')
const userRouter = require('./routes/user');
const newsRouter = require('./routes/news');

const app = express();
const PORT = parseInt(process.env.PORT);

connectToMongoDB();

const allowedOrigins = [
  'https://crophawk-app.vercel.app',
  'http://localhost:5173'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('*', cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

app.use('/', staticRouter)
app.use('/user', userRouter);
app.use('/news', newsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}....`);
});