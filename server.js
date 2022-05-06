
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {readdirSync} from "fs";
import {ragister} from "./controller/auth"
require("dotenv").config();
const app = express();

const morgan = require("morgan");
mongoose
  .connect(process.env.DBB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("dbconnected"))
  .catch((err) => console.log("db connection err", err));
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    // origin: [process.env.CLIENT_URL],
    origin:[`http://localhost:3000`]
  })

);
app.post("/api/ragister",ragister);
// readdirSync('./routs').map((r)=>app.use('/api',require(`./routs/${r}`)));
const port = process.env.PORT||8000;
app.listen(port, () => console.log(`server is runnig on port no ${port} `));
