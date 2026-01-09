import dotenv from'dotenv'
dotenv.config();
import express, { response } from 'express'
import connectDB from './src/config/db.js';
import Authrouter from "./src/routers/myRouter.js"

const app =express();
app.use(express.json());

app.use("/auth",Authrouter);






app.get("/",(req,res)=>{
    console.log("Server is running");
    res.json({message:"Server is running"});
    });

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("server started port",port);
    connectDB();
});

