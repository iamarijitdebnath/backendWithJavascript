// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("Error");
        throw error
    })

    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at ${process.env.PORT} `);
    })
})
.catch((err)=>{
    console.log("MONGO DB Connection failed !! ",err);
})












/*
import express from "express";
const app = express()
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listing on port ${process.env.PROT}`);
        })



    } catch (error) {
        console.error("ERROR",error);
        throw err
    }
})()
*/