import dotenv from 'dotenv';
dotenv.config();


import express from "express";
import cors from 'cors';
import excRouter from './routers/exc.router';
import { dbConnect } from './configs/database.config';
import { sample_users } from './data';
import jwt from "jsonwebtoken";
import userRouter from './routers/user.router';

dbConnect();
const app = express();
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));



app.use("/data",excRouter);
app.use('/userdata',userRouter)
const port=5000;
app.listen(port, ()=>{
    console.log("Website served")
})
