const userModel = require('../models/users.model.js')
const { z } = require('zod')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const generateJWT = require('../utils/generateJWT.utils.js')
const sendWelcomeMail = require(`../mail/resend.mail.js`)

dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET
const signup = async(req,res)=>{

    const { name, email, password } = req.body
    const requiredBody = z.object({
        name: z.string().min(3).max(100),
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
            message: `Please provide input values in correct format, ${isParsedWithSuccess.error}`
        })
    }

    const userExists = await userModel.findOne({
        email
    })

    if(userExists){
        return res.status(400).json({
            success: false,
            mesaage: `User already exists`
        })
    }

    const hashedPassword = await bcrypt.hash(password,7)

    try{
        const newUser = await userModel.create({
            name: name,
            email: email,
            password: hashedPassword
        })

        const token = generateJWT(newUser._id, '15d')

        sendWelcomeMail(email, name)
        
        return res
        .cookie("token", token, {
            maxAge: 1000*60*60*24*15,
            sameSite: 'lax',
        })
        .status(201)
        .json({
            success: true,
            message: 'You are signed up',
            token,
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