const express = require('express')
const connectDB = require('./db/connect.db.js')
const userRouter = require('./routes/user.route.js')
const todoRouter = require('./routes/todo.route.js')
const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

const app = express()
dotenv.config()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cookieParser())

app.use('/user', userRouter)
app.use('/todo', todoRouter)


app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server Started at http://localhost:${PORT}`)
})