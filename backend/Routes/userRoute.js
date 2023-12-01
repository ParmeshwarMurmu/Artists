const express = require('express')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../Models/userSchema')



const userRoute = express.Router()

userRoute.post('/register', async(req, res)=>{
        
    try {
        const {email, password} = req.body
        const existingUser = await UserModel.findOne({email})
        if(existingUser){
            res.status(200).send({"msg": "User Already Exists"})
        }
        else{
            bcrypt.hash(password, 5, async(err, hash)=> {
                // Store hash in your password DB.
                if(err){
                    res.status(200).send({"msg": "Enter password again"})
                    
                }
                
                const newUser = new UserModel({...req.body, password: hash})
                await newUser.save();
                res.status(200).send({"msg": "User Registered"})
                
            });
        }
        
    } catch (error) {
        res.status(2400).send({"msg": "Registration Failed", "err": error})
        
    }
})

userRoute.post('/login', async(req, res)=>{
        
    try {
        const {email, password} = req.body
        const existingUser = await UserModel.findOne({email})

        if(existingUser){
            bcrypt.compare(password, existingUser.password, (err, result)=> {

                if(err){
                    res.status(200).send({"msg": "Wrong Crendentials"})
                    
                }
                
                res.status(200).send({"msg": "Login Successfully"})
                
            });
        }
        else{
            res.status(200).send({"msg": "User Not Found. Please Register"})
           
        }
        
    } catch (error) {
        res.status(2400).send({"msg": "Login Failed", "err": error})
        
    }
})





module.exports = {
    userRoute
}