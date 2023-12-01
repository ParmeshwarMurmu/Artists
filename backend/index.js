const express = require('express')
require('dotenv').config()
const { connection }  = require('./Config/db')

const app = express()



app.listen(process.env.PORT, async()=>{
    try {
        console.log("Connecting DataBase");
        await connection;
        console.log("Connected To DataBase");
        console.log(`Your server is running at port ${process.env.PORT}`);
    } catch (error) {
        console.log("something went wrong");
        console.log(error);
    }
})