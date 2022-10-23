const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); //METHOD CONNECT 2
// const connectDB = require('./config/connectDB');//METHOD CONNECT 1

const taskRoutes = require('./routes/taskRoute');

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

//METHOD CONNECT DB 2
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

//METHOD CONNECT DB 1
// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();
