import express from "express";
import dotenv from "dotenv";

dotenv.config();
const { PORT } = process.env;
const app = express();

app.get("/", (_req, res) => {
  res.send('hola mundo');
});

app.listen( PORT, () => {
  console.log("Server is running on port 8080");
});