import express from "express";
import dotenv from "dotenv";
import { Database } from "./src/Database/config.ts";

dotenv.config();
const { PORT } = process.env;
const app = express();

Database();

app.get("/", (_req, res) => {
  res.send('hola mundo');
});

app.listen( PORT, () => {
  console.log("Server is running on port 8080");
});