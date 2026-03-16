const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const notFoundHandler = require('./middleware/common/errorHandler');
const cookieParser = require('cookie-parser');

const app = express();
dotenv.config();

// database connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

// request parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');

// set static files
app.use(express.static(path.join(__dirname, 'public')));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));


// 404 Not found handler
app.use(notFoundHandler);


app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on http://localhost:3000');
});