const express = require('express')
const connectDB = require('./db/connect.db.js')
const signup = require('./controllers/signup.controller.js')
const signin = require('./controllers/signin.controller.js')
const dotenv = require('dotenv')

const app = express()
dotenv.config()
const PORT = process.env.PORT || 8000

app.use(express.json())

app.post('/signup', signup)
app.post('/signin', signin)

app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server Started at http://localhost:${PORT}`)
})