const signup = require('../controllers/signup.controller.js')
const signin = require('../controllers/signin.controller.js')
const myInfo = require('../controllers/myInfo.controller.js')
const auth = require('../middlewares/auth.middleware.js')
const { Router } = require('express')

const userRouter = Router()

//user sign up 
userRouter.post('/signup', signup)

//user sign in
userRouter.post('/signin', signin)

//me 
userRouter.get('/me', auth, myInfo)

module.exports = userRouter