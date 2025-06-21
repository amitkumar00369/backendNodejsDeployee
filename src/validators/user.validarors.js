const {check} =require('express-validator')


const userReg=[

    check('name').notEmpty().withMessage('This field is require'),
    check('email').notEmpty().withMessage('This field is require').custom((values)=>{
        if (!values.includes("@") || !values.includes(".")){
            throw new Error('achhe se likho')
        }
        return true;
    }),
    check('password').notEmpty().withMessage('This field is require'),
    check('mobileNo').notEmpty().withMessage('This field is require')
    
]

module.exports={userReg}

