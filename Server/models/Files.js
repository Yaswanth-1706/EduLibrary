const mongoose=require('mongoose')
const FileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   discription:{
    type:String
   },
   image:{
    type:String
   }
})
module.exports=mongoose.model("eduFile",FileSchema)