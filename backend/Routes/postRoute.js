const express = require('express')
const { auth } = require('../miiddleware/auth')
const multer = require('multer')
const fs = require("fs");
const path = require("path");
const { PostModel } = require('../Models/postSchema');
const { CommentModel } = require('../Models/commentSchema');
const { log } = require('console');
const { FavouriteModel } = require('../Models/favouriteSchema');

const postRoute = express.Router()

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    },
});

const upload = multer({ storage: storage })


postRoute.get('/', async (req, res) => {

    try {
        const posts = await PostModel.find().populate('user').sort({ _id: -1 })
        res.status(200).send({ "msg": "All Posts", data: posts })

    } catch (error) {
        res.status(400).send({ "msg": "cannot get posts", "err": error })

    }
})

postRoute.post('/uploads', upload.single('photos'), auth, async (req, res) => {

    // console.log("***");

    try {
        // console.log("++++++++++++++++++++++++++");
        console.log(req.file, ">>>>>");
        const file = req.file;
        // console.log(req.body);
        console.log(file);

        // Move each file to the uploads directory

        const destination = path.join(__dirname, '..', 'uploads', file.originalname);
        fs.renameSync(file.path, destination);

        const fileName = file.filename;
        const title = fileName.substring(0, fileName.lastIndexOf('.')); // Assuming the title is the part before the file extension
        const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;

        // console.log(fileUrl);
        // console.log("title", title);

        req.body.image = fileUrl;
        // console.log("reqbody", req.body); likes: Number,
        // isLiked: Boolean,
        const we = PostModel({ ...req.body, title, likes: 0, isLiked: false, views: 0 })
        await we.save();

        res.status(200).send({ "msg": "success" })


    } catch (error) {

    }
})




// postRoute.post('/uploads', upload.array('photos', 5), auth, async (req, res) => {



//     try {

//         console.log("++++++++++++++++++++++++++");
//         const files = req.files;
//         // console.log(req.body);
//         // console.log(files);

//     // Move each file to the uploads directory
//     files.forEach(file => {
//       const destination = path.join(__dirname, '..', 'uploads', file.originalname);
//       fs.renameSync(file.path, destination);
//     });

//     const fileUrls = files.map(file => {
//         // console.log(file);
//         const title = file.originalname.split(".")
//         // console.log(title);
//         return {
//             title: title[0],
//             url: `${req.protocol}://${req.get('host')}/uploads/${file.filename}`
//         }
//         // return `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;
//       });

//     //   console.log(fileUrls);

//       req.body.image=fileUrls
//       const we = new PostModel(req.body)
//       await we.save();
//       res.status(200).send({ "msg": "success" })


//     } catch (error) {
//         res.status(400).send({ "err": error })


//     }
// })




postRoute.get('/singlePost/:_id', async (req, res) => {

    try {
        const { _id } = req.params;
        // console.log("_id", _id);
        const singleData = await PostModel.findOne({ _id }).populate('user')
        res.status(200).send({ "singleData": singleData })

    } catch (error) {
        res.status(400).send({ "msg": "cannot get singleData", "err": error })

    }
})

// views

postRoute.patch('/views/:_id', async (req, res) => {

    try {
        const { _id } = req.params;
        // console.log("_id", _id);
        const views = await PostModel.findOne({ _id })
        const updateViews = views.views + 1;
        views.views = updateViews;
        await PostModel.findByIdAndUpdate({ _id }, {views: updateViews})
        res.status(200).send({ "views": "views"})

    } catch (error) {
        res.status(400).send({ "msg": "cannot get singleData", "err": error })

    }
})

// individual post comments
postRoute.post('/comment/:id', auth, async (req, res) => {
    console.log(req.body);
    const { id } = req.params;
    console.log(id);

    try {
        const newComment = new CommentModel({ ...req.body, post: id })
        await newComment.save()
        res.status(200).send({ "msg": "Comment Posted" })
    } catch (error) {
        res.status(400).send({ "msg": "cannot comment", "err": error })

    }
})


// Comment of Posts

postRoute.get('/postComment/:_id', async (req, res) => {
    // console.log(req.body);
    const { _id } = req.params;
    console.log(_id);

    try {
        const postComment = await CommentModel.find({ post: _id }).populate('user').sort({ _id: -1 })
        res.status(200).send({ "msg": "All Post Comments", "postComment": postComment })
    } catch (error) {
        res.status(400).send({ "msg": "cannot get Post Comment", "err": error })

    }
})




// patch for likes posts
postRoute.patch('/postLike/:_id', async (req, res) => {
    // console.log(req.body);
    const { _id } = req.params;
    console.log(_id);

    try {
        const singlePost = await PostModel.findOne({ _id }).populate('user')
        let isLiked = singlePost.isLiked;
        if (isLiked) {
            let totalLikes = singlePost.likes - 1;
            singlePost.isLiked = false;
            singlePost.likes = totalLikes;
        }
        else {
            let totalLikes = singlePost.likes + 1;
            singlePost.isLiked = true;
            singlePost.likes = totalLikes;
        }
        // let totalLikes = singlePost.likes + 1;
        // console.log(totalLikes, "totallikes");
        // singlePost.likes = totalLikes;
        // singlePost.isLiked = true
        const likes = await PostModel.findByIdAndUpdate({ _id }, { ...singlePost })
        const totalUserLikes = await PostModel.findOne({ _id }).populate('user')
        res.status(200).send({ "msg": "likes", "totalUserLikes": totalUserLikes })
    } catch (error) {
        res.status(400).send({ "msg": "cannot get Post Comment", "err": error })

    }
})


postRoute.get('/moreArts/:_id', async (req, res) => {
    // console.log(req.body);
    const { _id } = req.params;
    console.log(_id, "moreArts");

    try {
        const postData = await PostModel.findOne({ _id })
        // console.log("postData", postData);

        const userId = postData.user
        // console.log(userId, "userId");
        const moreArts = await PostModel.find({ user: userId }).limit(15)
        // console.log("mortArts");
        // console.log(moreArts);
        res.status(200).send({ "msg": "AmoreArts", "moreArts": moreArts })
    } catch (error) {
        res.status(400).send({ "msg": "cannot get moreArts", "err": error })

    }
})


postRoute.get('/suggestedArts', async (req, res) => {

    try {

        const suggestedArts = await PostModel.find().limit(25)
        res.status(200).send({ "msg": "suggestedArts", "suggestedArts": suggestedArts })
    } catch (error) {
        res.status(400).send({ "msg": "cannot get suggestedArts", "err": error })

    }
})


// adding user fav
postRoute.post('/addToFavoutrite', auth, async (req, res) => {

    try {
        const { user, id } = req.body;
        console.log(user, id);
        const isPresent = await FavouriteModel.findOne({ user, post: id });
        // console.log(isPresent);
        if (isPresent) {
            res.status(200).send({ "msg": "Already in your Favorites" });
        }
        else {
            const userFavourite = new FavouriteModel({ user, post: id })
            await userFavourite.save();
            res.status(200).send({ "msg": "Added to your Favourites" })
        }


    } catch (error) {
        res.status(400).send({ "msg": "Cannot Add to your Favourites", "err": error })

    }
})


// user Favourite

postRoute.get('/userFavourite', auth, async (req, res) => {

    try {
        const { user } = req.body;

        // const userFavourite = await FavouriteModel.find({ user }).populate('post').populate('user').sort({ post: -1 })
        const userFavourite = await FavouriteModel.find({ user })
        .populate({
            path: 'post',
            populate: {
                path: 'user',
                model: 'user'
            }
        })
        .populate('user') // Populate the user field in FavouriteModel
        .sort({ _id: -1 });
        res.status(200).send({ "msg": "userFavourite", "userFavourite": userFavourite })
    } catch (error) {
        res.status(400).send({ "msg": "cannot get userFavourite", "err": error })

    }
})


// user Post

postRoute.get('/userPost', auth, async (req, res) => {

    try {
        const { user } = req.body;

        // const userFavourite = await FavouriteModel.find({ user }).populate('post').populate('user').sort({ post: -1 })
        const userPost= await PostModel.find({ user }).populate('user').sort({_id: -1})
        res.status(200).send({ "msg": "userPost", "userPost": userPost })
    } catch (error) {
        res.status(400).send({ "msg": "cannot get userPost", "err": error })

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