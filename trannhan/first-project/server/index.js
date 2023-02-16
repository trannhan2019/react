import express from "express";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";
const path = require("path");

const app = express();

app.use(
  cors({
    origin: `${process.env.CLIENT_URL}`,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
app.use(
  "public/uploads",
  express.static(path.join(__dirname, "public/uploads"))
);
// console.log(path.join(__dirname, "src/uploads/"));
// app.use(express.static(path.join(__dirname, "uploads")));

app.use("/api/", routes);

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
