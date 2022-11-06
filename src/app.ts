import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { appDataSource } from "./DB/mysql";
import prouctRouter from "./routers/product";

dotenv.config();
const PORT = process.env.PORT || 9999;
const app = express();

app.use(bodyParser.json());
app.use("/products", prouctRouter);
appDataSource
  .initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`the app is tunning on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
