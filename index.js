import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AppRouter from "./router/index.js";


dotenv.config();

const PORT = process.env.PORT;

const DB_NAME = process.env.DB_NAME;
const DB_URL = process.env.DB_URL;

console.log(DB_URL);
mongoose.connect(`${DB_URL}`);


const app = express();
app.use(cors());
app.use(express.json());
app.use(AppRouter);
app.get("/", (req, res) => {
  res.send("server running");
});
app.listen(PORT, () => console.log(`App listening port ${PORT}`));
