import express from "express";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(
  cors({
    origin: `${process.env.CLIENT_URL}`,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//https://expressjs.com/en/starter/static-files.html
app.use(express.static(path.join(__dirname, "public/uploads/users")));
// app.use("/static", express.static("public/uploads/users"));

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
