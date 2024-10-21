const express = require('express')
const connectDB = require('./db/connect.db.js')
const signup = require('./controllers/signup.controller.js')
const signin = require('./controllers/signin.controller.js')
const createTodo = require('./controllers/createTodo.controller.js')
const updateTodo = require('./controllers/updateTodo.controller.js')
const deleteTodo = require('./controllers/deleteTodo.controller.js')
const getAllTodos = require('./controllers/getAllTodos.controller.js')
const auth = require('./middlewares/auth.middleware.js')
const dotenv = require('dotenv')

const app = express()
dotenv.config()
const PORT = process.env.PORT || 8000

app.use(express.json())

//user sign up 
app.post('/signup', signup)

//user sign in
app.post('/signin', signin)

app.use(auth)

//create todo
app.post('/todo', createTodo)

//update todo
app.patch('/todo/:id', updateTodo)

//delete todo
app.delete('/todo/:id', deleteTodo)

//get all todos
app.get('/todo', getAllTodos)

app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server Started at http://localhost:${PORT}`)
})