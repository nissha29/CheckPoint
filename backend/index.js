const express = require('express')
const connectDB = require('./db/connect.db.js')
const signup = require('./controllers/signup.controller.js')
const signin = require('./controllers/signin.controller.js')
const app = express()

app.use(express.json())

app.post('/signup', signup)
app.post('/signin', signin)

app.listen('3000', ()=>{
    connectDB()
    console.log('Server Started')
})