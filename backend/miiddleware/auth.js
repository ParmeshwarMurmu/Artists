const jwt = require('jsonwebtoken')
require('dotenv').config()


const auth = (req, res, next)=>{
    const token = req.headers.authorization.split(" ")[1]
    // console.log("token",token)
    if(token){
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=> {
            if(err){
                res.status(200).send({"msg": "Please login Again"})
            }
            
            console.log(decoded);
            req.body.user = decoded.userId;
            req.body.userName = decoded.userName;
            next()
        });
        
    }
    else{
        res.status(400).send({"msg": "Please login Again"})

    }
   
}


module.exports={
    auth
}