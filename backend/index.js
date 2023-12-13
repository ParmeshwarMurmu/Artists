const express = require('express')
require('dotenv').config()
const { connection }  = require('./Config/db')
const cors = require('cors')
const {userRoute} = require('./Routes/userRoute')
const { postRoute } = require('./Routes/postRoute')

const app = express()

app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://artists-kg0g.onrender.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
app.use(cors())
app.use('/userProfile', express.static('userProfile'));

// app.use('/uploads', express.static('uploadArt'));
app.use('/uploads', express.static('uploads'));
app.use('/user', userRoute)
app.use('/post', postRoute)


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



// https://artists-jvdl.onrender.com