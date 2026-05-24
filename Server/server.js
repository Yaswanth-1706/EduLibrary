const express=require('express')
const mongoose =require('mongoose')
const cors=require('cors')
const dotEnv=require('dotenv')
dotEnv.config()
const adminroutes=require('./Routes/AdminRoute')
const userroutes=require('./Routes/UserRoute')
const fileroutes=require('./Routes/FileRoute')
mongoose.connect(process.env.mongourl).then(()=>{
    console.log("db connected successfully")
}).catch((err)=>{
    console.log("db connection error: ",err)
})
const app=express()
app.use("/uploads", express.static("uploads"))
app.use(express.json())
app.use(cors())
app.use('/admins',adminroutes)
app.use('/users',userroutes)
app.use('/files',fileroutes)
const PORT= process.env.PORT || 2000
app.listen(PORT,(err)=>{
    if(err)
    console.log("port connection error: ",err)
else
    console.log(`server started successfully and running on port : ${PORT}`)
})