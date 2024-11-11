const signup = require('../controllers/signup.controller.js')
const signin = require('../controllers/signin.controller.js')
const { Router } = require('express')

const userRouter = Router()

//user sign up 
userRouter.post('/signup', signup)

//user sign in
userRouter.post('/signin', signin)

module.exports = userRouter