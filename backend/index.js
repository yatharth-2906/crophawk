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

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

app.use('/', staticRouter)
app.use('/user', userRouter);
app.use('/news', newsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}....`);
});