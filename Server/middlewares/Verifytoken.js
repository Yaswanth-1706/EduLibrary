const jwt=require('jsonwebtoken')
const dotEnv=require('dotenv')
dotEnv.config()
const secretkey=process.env.secretKey
const VerifyToken=(req,res,next)=>{
const header=req.headers.authorization
if(!header)
{
    return res.status(400).json({message:"token requires for user"})
}
const token=header.split(" ")[1]
try{
    const decoded=jwt.verify(token,secretkey)
    req.user=decoded
    next()
}
catch(err){
    res.status(400).json({message:"invalid token"})
}
}
module.exports=VerifyToken