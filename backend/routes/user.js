const express = require("express");
const zod = require('zod');

const User = require('../db')
const userRouter = express.Router();


const signupBody = zod.object({
    username : zod.string(),
    lastName : zod.string(),
    firstName : zod.string(),
    password : zod.string(),
}) 


userRouter.get('/',(req,res)=>{
    res.json({"msg":"hi wot=rld"})
})

userRouter.post('/signup',async (req,res)=>{
    
    const { success } = signupBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    const isDataPresent =await User.findOne({username:req.body.username});
    if(isDataPresent){
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }
       const user = await User.create({
            username:req.body.username,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            password:req.body.password,

        })
        const userId = user._id;

        const token = jwt.sign({
            userId
        }, JWT_SECRET);
    
        res.json({
            message: "User created successfully",
            token: token
        })
    

    })


module.exports=userRouter;