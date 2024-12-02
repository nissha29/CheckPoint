const userModel = require('../models/users.model.js')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const generateJWT = require('../utils/generateJWT.utils.js')

dotenv.config()

const signin = async(req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({
            success: false,
            message: 'Email and password are required'
        });
    }

    try {
        const userExists = await userModel.findOne({ email });
        if (!userExists) {
            return res.status(404).json({
                success: false,
                message: `Invalid credentials`
            });
        }
        
        const passwordMatched = await bcrypt.compare(password, userExists.password);
        if (!passwordMatched) {
            return res.status(404).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        const token = generateJWT(userExists._id, '15d')

        return res
        .cookie("token", token, {
            maxAge: 1000*60*60*24*15,
            sameSite: 'lax',
        })
        .status(200).json({
            token,
            success: true,
            message: 'You are signed in'
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: `Server error: ${err}`
        });
    }
};

module.exports = signin