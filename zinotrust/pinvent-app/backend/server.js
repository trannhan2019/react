const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/userRoute');

const errorHandler = require('./middleware/errorMiddleware');

const app = express();

// Middleware
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Fix Cors
app.use(cors());

// Routes Middleware
app.use('/api/users', userRoute);

//Routes
app.get('/', (req, res) => {
  res.send('Welcome to the home page');
});

// errorHandler Should be the last middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}...`)
    )
  )
  .catch((err) => console.log(err));
