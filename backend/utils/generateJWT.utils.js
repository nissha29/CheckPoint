const jwt = require('jsonwebtoken')

const generateJWT = (userId, expiresIn = '15d')=>{
    const token = jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn }
    )
    return token;
}

module.exports = generateJWT