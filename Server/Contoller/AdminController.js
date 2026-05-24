const admin=require('../models/Admin')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const dotEnv=require('dotenv')
dotEnv.config()
const secretkey=process.env.secretkey
const CreateAdmin=async(req,res)=>{
    try{
     const {name, email,  password, isAdmin}=req.body
     const hashPassword=await bcrypt.hash(password,10)
     const Admin=new admin({
        name,
        email,
        password:hashPassword,
        isAdmin
     })

     await Admin.save()
     console.log("data of admin uploded in to db successfully")
     res.status(200).json(Admin)
    }
    catch(err){
     console.log("data  of admin not uploded in to db : ",err)
     res.status(500).json({message:"server is facing error while you uploding admin details"})
    }
}

const getAdmin=async(req,res)=>{
    try{
        const admins=await admin.find()
        res.status(200).json(admins)
        console.log(admins)
    }
    catch(err){
      console.log(err)
      res.status(500).json({message:"server is experencing an error"})
    }
}
const deleteAdmin=async(req,res)=>{
    try{
        
        const deleteAdmin=await admin.findByIdAndDelete(req.params.id)
        if(deleteAdmin){
        console.log(deleteAdmin)
        res.status(200).json({messeage:"Admin Deleted successfully"})
        }
        else
            console.log("record doesn't exist")

    }
    catch(err){
        console.log("admin  was not deleted: ",err)
        res.status(500).json({message:"server expereincing some error"})
    }
}
const adminLogin=async(req,res)=>{
    try{
        const {email,password}=req.body
        const adminlogin=await admin.findOne({email})
        if(!adminlogin)
        {
            return res.status(400).json({message:"admin doesn't exist"})
        }
        const match=await bcrypt.compare(password,adminlogin.password)
        if(!match)
        {
            return res.status(400).json({message:"inavlid password"})
        }
        const token =jwt.sign({
            email:adminlogin.email,
            isAdmin:adminlogin.isAdmin
        },secretkey)
     res.status(200).json({token:token})

    }catch(err){
           console.log("server error")
           res.status(500).json({message:"server side error"})
    }
}
module.exports={CreateAdmin,getAdmin,deleteAdmin,adminLogin}