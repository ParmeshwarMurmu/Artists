const express = require('express')
require('dotenv').config()
const { connection }  = require('./Config/db')
const cors = require('cors')
const {userRoute} = require('./Routes/userRoute')
const { postRoute } = require('./Routes/postRoute')
const fs = require("fs");
const path = require("path");
const { log } = require('console')

const app = express()

app.use(express.json())

app.use(cors())
app.use('/userProfileUpdate', express.static('userProfile'));

// app.use('/uploads', express.static('uploads'));
// app.use('/pictures', express.static('pictures'));
// app.use('/pictures', express.static(path.join(__dirname, 'pictures')));
// Add this route after app.use('/pictures', express.static(path.join(__dirname, 'pictures')));


app.use('/user', userRoute)
app.use('/post', postRoute)


app.get('/pictures/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, 'pictures', filename);
    res.sendFile(filePath);
});

// Add this before the express.static middleware

app.use('/pictures', (req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    console.log("))))");
    next();
});


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