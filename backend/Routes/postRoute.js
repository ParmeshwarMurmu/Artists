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

postRoute.post('/create', upload.array("photos", 5), auth, async (req, res) => {

    // console.log(req.body);

    try {
        const files = req.files;
        // console.log(files);

        files.forEach((file) => {
            const destination = path.join(__dirname, "..", "uploads", file.originalname)
            fs.renameSync(file.path, destination)
        })

        // generating URL for files

        const fileUrls = files.map((file) => {
            return `${req.protocol}://${req.get("host")}/uploads/${file.filename}`;
        });

        req.body.image = fileUrls[0];
        // console.log("imageUrl",req.body.image);
        const urlObject = new URL(req.body.image);
        const filename = path.basename(urlObject.pathname);

        // Split the filename at the first space to get the title
        const parts = filename.split(" ");
        const title = parts[0]
        // console.log("title",title);

        const newArt = new PostModel({...req.body})
        await newArt.save()
        res.status(200).send({"msg": "Art Uploaded Successfully"})

    } catch (error) {

    }
})


module.exports = {
    postRoute
}