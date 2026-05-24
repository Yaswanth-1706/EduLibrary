const user=require('../models/User')
const admin=require('../models/Admin')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const dotEnv=require('dotenv')
dotEnv.config()
const secretkey=process.env.secretkey
const CreateUser=async(req,res)=>{
    try{
     const {name, email,  password, isAdmin}=req.body
     const hashPassword=await bcrypt.hash(password,10)
     const User=new user({
        name,
        email,
        password:hashPassword,
        isAdmin
     })

     await User.save()
     console.log("data of user uploded in to db successfully")
     res.status(200).json(User)
    }
    catch(err){
     console.log("data  of user not uploded in to db : ",err)
     res.status(500).json({message:"server is facing error while you uploding user details"})
    }
}
const getUser=async(req,res)=>{
    try{
        const users=await user.find()
        res.status(200).json(users)
        console.log(users)
    }
    catch(err){
      console.log(err)
      res.status(500).json({message:"server is experencing an error"})
    }
}
const deleteUser=async(req,res)=>{
    try{
    
        const deleteUser=await user.findByIdAndDelete(req.params.id)
        if(deleteUser){
        console.log(deleteUser)
        res.status(200).json({messeage:"User Deleted successfully"})
        }
        else
        {
            console.log("record doesn't exist")
        }

    }
    catch(err){
        console.log("user was  not deleted: ",err)
        res.status(500).json({message:"server expereincing some error"})
    }
}
const userLogin=async(req,res)=>{
    try{
        const {email,password}=req.body
        const userlogin=await user.findOne({email})||await admin.findOne({email})
        if(!userlogin)
        {
            return res.status(400).json({message:"user doesn't exist"})
        }
        const match=await bcrypt.compare(password,userlogin.password)
        if(!match)
        {
            return res.status(400).json({message:"inavlid password"})
        }
        const token =jwt.sign({
            email:userlogin.email,
            isAdmin:userlogin.isAdmin
        },secretkey)
     res.status(200).json({token:token,role:userlogin.isAdmin})

    }catch(err){
           console.log("server error")
           res.status(500).json({message:"server side error"})
    }
}
module.exports={CreateUser,getUser,deleteUser,userLogin}