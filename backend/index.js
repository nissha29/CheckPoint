const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.post('/signup', (req,res)=>{
    res.json({
        message: "You are signed up"
    })
})

app.post('/signin', (req,res)=>{
    res.json({
        message: "You are signed in"
    })
})

app.get('/dashboard', (req,res)=>{
    res.json({
        message: "Welcome to the dashboard"
    })
})

app.listen('3000', console.log('Server Started'))