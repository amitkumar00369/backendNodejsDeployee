const {validationResult}=require('express-validator')



const errorResponse=async(req,res,next)=>{
    try {
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(409).json({
            message:errors.array({ onlyFirstError: true }),
            fields:errors.array({onlyFirstError:true})[0].msg,
            status:409
        })
    }
    else{
        next();
    }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"Internal server error"
        })
        
    }
}
module.exports={errorResponse}