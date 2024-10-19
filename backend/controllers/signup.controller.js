const userModel = require('../models/users.model.js')
const { z } = require('zod')
const bcrypt = require('bcrypt')

const signup = async(req,res)=>{

    const { fullName, email, password } = req.body
    const requiredBody = z.object({
        fullName: z.string().min(3).max(100),
        email: z.string().min(10).max(100).email(),
        password: z.string()
            .min(8, { message: "Password must be at least 8 characters long" })
            .max(50, { message: "Password must be at most 50 characters long" })
            .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
            .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
            .regex(/\d/, { message: "Password must contain at least one number" })
            .regex(/[\W_]/, { message: "Password must contain at least one special character" })
    });
    
    

    const isParsedWithSuccess = requiredBody.safeParse(req.body)
    if(! isParsedWithSuccess.success){
        return res.status(400).json({
            success: false,
            mesaage: `Please provide input values in correct format, ${isParsedWithSuccess.error}`
        })
    }

    const hashedPassword = await bcrypt.hash(password,7)

    try{
        await userModel.create({
            name: fullName,
            email: email,
            password: hashedPassword
        })
        return res.status(201).json({
            success: true,
            message: 'You are signed up'
        })
    }catch(err){
        if(err.code === 11000){
            return res.status(409).json({
                success: false,
                message: 'email already exists'
            })
        }
        else if (err.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: `Validation error: ${err.message}`,
            });
        }
        res.status(500).json({
            success: false,
            message: `${err}, Server error`
        })
    }
}

module.exports = signup