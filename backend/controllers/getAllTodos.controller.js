const mongoose = require('mongoose')
const todoModel = require('../models/todos.model.js')

const getAllTodos = async (req, res) => {
    const userId = req.userId;
    const userObjectId = new mongoose.Types.ObjectId(userId)

    try {
        const todos = await todoModel.find({ 
            userId: userObjectId 
        })
        
        return res.status(200).json({
            todos,
        });
    } catch (err) {
        return res.status(500).json({
            message: `${err}, Server error`,
        });
    }
};

module.exports = getAllTodos
