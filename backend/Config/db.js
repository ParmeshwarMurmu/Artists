const mongoose = require('mongoose')
require('dotenv').config()

const connection = mongoose.connect(process.env.mongoUrl)

module.exports = {
    connection
}



// postRoute.get('/', async(req, res)=>{

//     try {
//         const posts = await PostModel.find().populate('user')
//         res.status(200).send({"msg": "All Posts", data: posts})
        
//     } catch (error) {
//         res.status(400).send({"msg": "cannot get posts", "err": error})
        
//     }
// })