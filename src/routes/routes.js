const express=require('express')
const userVal=require('../validators/user.validarors')
const message=require('../middleware/errorResponse.middleware')
const userCon=require('../controllers/user.controllers')


const router=express.Router()


router.post('/userReg',userVal.userReg,message.errorResponse,userCon.UserSignup)

module.exports=router;