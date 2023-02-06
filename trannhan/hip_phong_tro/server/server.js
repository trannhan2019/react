import express from "express";
import cors from "cors";
import http from "http";
import "dotenv/config";

import routes from "./src/routes/index";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", routes);

const port = process.env.PORT || 5000;

const server = http.createServer(app);
server.listen(port, () => {
  try {
    console.log(`Server is listening on port ${port}`);
  } catch (error) {
    console.log({ error });
    process.exit(1);
  }
});
