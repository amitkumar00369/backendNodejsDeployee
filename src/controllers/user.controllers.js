const User=require('../Schema/schema.user')

const bcrypt=require('bcrypt')
require("dotenv").config()





const UserSignup=async(req,res)=>{
    try {
        const {name,email,password,mobileNo,isActive}=req.body;
        console.log("hello")
        const find=await User.findOne({email:email})
        if(find){
            return res.status(203).json({
                message:"User already has registered",
                code:203
            })

        }
        const hashPass=await bcrypt.hash(password,10)
        const user=await User.create({
            name:name,email:email,password:hashPass,mobileNo:mobileNo,createAt:new Date(),isActive:isActive
        })
        return res.status(200).json({
            message:"user registered successfully",
            data:user,
            code:200
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"Internal server error",
            code:500
        })
        
    }
}

module.exports={UserSignup}