const express = require("express");
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const routes = require("./src/routes/index.js");

const app = express();

app.use(
  cors({
    origin: `${process.env.CLIENT_URL}`,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//https://expressjs.com/en/starter/static-files.html
// app.use(express.static(path.join(__dirname, "public/uploads/users")));
app.use("/public/uploads/users", express.static("public/uploads/users"));

app.use("/api", routes);

const port = process.env.PORT || 5000;

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongodb connected");
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });
