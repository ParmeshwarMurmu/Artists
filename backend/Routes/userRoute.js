const express = require('express')
const multer = require('multer')
const bcrypt = require('bcrypt');
require('dotenv').config()
const jwt = require('jsonwebtoken');
const { UserModel } = require('../Models/userSchema')
const { auth } = require('../miiddleware/auth')
const fs = require("fs");
const path = require("path");



const userRoute = express.Router()



const storage = multer.diskStorage({
    destination: './userProfile',
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    },
});

const upload = multer({ storage: storage })


userRoute.post('/register', async (req, res) => {

    try {
        const { email, password } = req.body
        const existingUser = await UserModel.findOne({ email })
        if (existingUser) {
            res.status(200).send({ "msg": "User Already Exists" })
        }
        else {
            bcrypt.hash(password, 5, async (err, hash) => {
                // Store hash in your password DB.
                if (err) {
                    res.status(200).send({ "msg": "Enter password again" })

                }

                const newUser = new UserModel({ ...req.body, password: hash })
                await newUser.save();
                res.status(200).send({ "msg": "User Registered" })

            });
        }

    } catch (error) {
        res.status(2400).send({ "msg": "Registration Failed", "err": error })

    }
})

userRoute.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body
        const existingUser = await UserModel.findOne({ email })

        if (existingUser) {
            bcrypt.compare(password, existingUser.password, (err, result) => {

                if (err) {
                    res.status(200).send({ "msg": "Wrong Crendentials" })

                }

                const token = jwt.sign({ userId: existingUser._id, userName: existingUser.firstName }, process.env.SECRET_KEY);
                res.status(200).send({ "msg": "Login Successfully", "userId": existingUser._id, "token": token })

            });
        }
        else {
            res.status(200).send({ "msg": "User Not Found. Please Register" })

        }

    } catch (error) {
        res.status(2400).send({ "msg": "Login Failed", "err": error })

    }
})



userRoute.get('/singleUser/:id', async (req, res) => {

    try {
        const { id } = req.params;
        if (id) {
            const user = await UserModel.findOne({ _id: id })
            res.status(200).send({ "user": user })
        }

    } catch (error) {
        res.status(400).send({ "msg": "sommething went wrong", "err": error })

    }
})

// userProfileUpdate

userRoute.patch('/userProfileUpdate', upload.single('userImage'), auth, async (req, res) => {

    const file = req.file;
    


   



    try {
        const { email, password, firstName, lastName, state, city, user } = req.body

        console.log(email, password, firstName, lastName, state, city, user);

        const updateFields = {
            ...(firstName !== undefined && { firstName }),
            ...(lastName !== undefined && { lastName }),
            ...(state !== undefined && { state }),
            ...(city !== undefined && { city }),
            
            
        };
        
        if(file){

        
        const destination = path.join(__dirname, '..', 'userProfile', file.originalname);
        fs.renameSync(file.path, destination);

        const fileName = file.filename;
        const title = fileName.substring(0, fileName.lastIndexOf('.')); // Assuming the title is the part before the file extension
        const fileUrl = `${req.protocol}://${req.get('host')}/userProfile/${file.filename}`;

        // Append the image URL to req.body.image
        req.body.image = fileUrl;

        // console.log(">>>>");
        // console.log(fileUrl);

        updateFields.image = fileUrl;


        }

        // console.log(...req.body);
        
        

        if (password) {
            bcrypt.hash(password, 5, async (err, hash) => {
                // Store hash in your password DB.
                if (err) {
                    res.status(200).send({ "msg": "Enter password again" })

                }
                
                updateFields.password = hash;
             
                console.log(updateFields);
                const ExistingUser = await UserModel.findByIdAndUpdate({ _id: user }, { ...updateFields })
                res.status(200).send({ "msg": "Profile Updated" })

            });
        }
        else {

            
            
            const ExistingUser = await UserModel.findByIdAndUpdate({ _id: user }, { ...updateFields})
            res.status(200).send({ "msg": "Profile Updated" })
        }

    } catch (error) {
        res.status(400).send({ "msg": "Login Failed", "err": error })

    }
})








module.exports = {
    userRoute
}