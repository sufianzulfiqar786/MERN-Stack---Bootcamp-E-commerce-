import express from "express";

import Connection from "./database/db.js";

import dotenv from "dotenv";

import Routes from "./routes/route.js";

import cors from "cors";
import path from 'path';
const __dirname = path.resolve();
import bodyParser from "body-parser";

const app = express();

import multer from "multer"

const uploadPhoneImage = multer({dest: 'uploads/Phone'})

dotenv.config();

app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/images',express.static(path.join(__dirname, './uploads')));  

app.use("/front", Routes);


app.post('/api/image', uploadPhoneImage.single('imagePhone'), (req, res)=>{
  console.log(req.file)
  if(!req.file){
    console.log("Image error from backend side");
  }
  else{
  res.send({code: 200, msg: 'upload success'})
  }
})


const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () =>
  console.log(`Server is running successfully on port ${PORT}`)
);
