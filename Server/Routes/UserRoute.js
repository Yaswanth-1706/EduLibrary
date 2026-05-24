const express=require('express')
const userContoller=require('../Contoller/UserController')
const verifyUser=require('../middlewares/Verifytoken')
const userrouter=express.Router()
userrouter.post('/addUser',userContoller.CreateUser)
userrouter.get('/getUser',verifyUser, userContoller.getUser)
userrouter.delete('/deleteUser/:id',userContoller.deleteUser)
userrouter.post('/userlogin',userContoller.userLogin)
module.exports=userrouter