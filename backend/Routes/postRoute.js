const express = require('express')
const { auth } = require('../miiddleware/auth')
const multer = require('multer')
const fs = require("fs");
const path = require("path");
const { PostModel } = require('../Models/postSchema');

const postRoute = express.Router()

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    },
});

const upload = multer({ storage: storage })


postRoute.get('/', async(req, res)=>{

    try {
        const posts = await PostModel.find().populate('user')
        res.status(200).send({"msg": "All Posts", data: posts})
        
    } catch (error) {
        res.status(400).send({"msg": "cannot get posts", "err": error})
        
    }
})

postRoute.post('/uploads', upload.single('photos'), auth, async (req, res) => {

    // console.log("***");

    try {
        // console.log("++++++++++++++++++++++++++");
        const file = req.file;
        // console.log(req.body);
        // console.log(file);

        // Move each file to the uploads directory

        const destination = path.join(__dirname, '..', 'uploads', file.originalname);
        fs.renameSync(file.path, destination);
        
        const fileName = file.filename;
        const title = fileName.substring(0, fileName.lastIndexOf('.')); // Assuming the title is the part before the file extension
        const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;

        // console.log(fileUrl);
        // console.log("title", title);

        req.body.image = fileUrl;
        // console.log("reqbody", req.body);
        const we = PostModel({...req.body, title})
        await we.save();

        res.status(200).send({ "msg": "success" })


    } catch (error) {

    }
})


module.exports = {
    postRoute
}



// ***
// [
//   {
//     fieldname: 'photos',
//     originalname: 'searchNot Found.jpg',
//     encoding: '7bit',
//     mimetype: 'image/jpeg',
//     destination: './uploads',
//     filename: 'searchNot Found.jpg',
//     path: 'uploads\\searchNot Found.jpg',
//     size: 4354
//   }
// ]