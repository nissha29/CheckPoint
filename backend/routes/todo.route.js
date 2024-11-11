const createTodo = require('../controllers/createTodo.controller.js')
const updateTodo = require('../controllers/updateTodo.controller.js')
const deleteTodo = require('../controllers/deleteTodo.controller.js')
const getAllTodos = require('../controllers/getAllTodos.controller.js')
const auth = require('../middlewares/auth.middleware.js')
const { Router } = require('express')

const todoRouter = Router()

//create todo
todoRouter.post('/', auth, createTodo)

//update todo
todoRouter.patch('/:id', auth, updateTodo)

//delete todo
todoRouter.delete('/:id', auth, deleteTodo)

//get all todos
todoRouter.get('/', auth, getAllTodos)

module.exports = todoRouter