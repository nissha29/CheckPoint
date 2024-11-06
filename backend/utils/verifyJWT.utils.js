const jwt = require('jsonwebtoken')

const verifyJWT = (token, JWT_SECRET)=>{
    const response = jwt.verify(token, JWT_SECRET)
    return response
}

module.exports = verifyJWT