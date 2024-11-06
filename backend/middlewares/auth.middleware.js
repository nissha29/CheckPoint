const JWT_SECRET = process.env.JWT_SECRET
const verifyJWT = require('../utils/verifyJWT.utils.js')

const auth = async (req, res, next) => {
    const token = req.headers.token

    if (!token) {
        return res.status(401).json({ 
            message: 'No token provided' 
        })
    }

    try {
        const response = verifyJWT(token, JWT_SECRET)
        req.userId = response.userId
        next()
    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ 
                message: 'You are unauthorized, invalid token'
            })
        }
        return res.status(500).json({ 
            message: 'Server error during authentication', error: `${err}` 
        })
    }
}

module.exports = auth