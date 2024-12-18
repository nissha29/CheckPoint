const express = require('express')
const connectDB = require('./db/connect.db.js')
const userRouter = require('./routes/user.route.js')
const todoRouter = require('./routes/todo.route.js')
const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

const app = express()
dotenv.config()

const allowedOrigins = ['http://localhost:5173', 'https://checkpoint-ten.vercel.app'];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cookieParser())

app.use('/user', userRouter)
app.use('/todo', todoRouter)


app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server Started at http://localhost:${PORT}`)
})