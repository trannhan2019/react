const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const errHandler = require("./middlewares/errHandler");

const app = express();

app.use(
  cors({
    origin: `${process.env.CLIENT_URL}`,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use("/api", routes);
app.use(errHandler.notFound);
app.use(errHandler.errHandler);

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
