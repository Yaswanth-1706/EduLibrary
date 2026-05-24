const express=require('express')
const adminController=require('../Contoller/AdminController')
const adminVerify=require('../middlewares/Verifytoken')
const adminrouter=express.Router()
adminrouter.post('/addAdmin',adminController.CreateAdmin)
adminrouter.get('/getAdmin',adminVerify,adminController.getAdmin)
adminrouter.delete('/deleteAdmin/:id',adminController.deleteAdmin)
// adminrouter.post('/adminlogin',adminController.adminLogin)
module.exports=adminrouter