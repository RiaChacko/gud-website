import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import signUpRoute from "../api/routes/signup.js";

dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB!");
}).catch((err)=>{
    console.log(err);
})

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.use('/api/signup', signUpRoute);

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
})