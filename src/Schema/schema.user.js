const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
       
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    
    },
    mobileNo:{
        type:String,
    

    },
    createAt:{
        type:Date
    },
    isActive:{
        type:Boolean
    },
    deviceName:{
        type:String
    },
    ipAddress:{
        type:String
    }
},
{
    timestamps:true
})

module.exports=mongoose.model('UserTable',userSchema)