const mongoose = require('mongoose')
const todoModel = require("../models/todos.model")

const updateTodo = async(req,res)=>{
    const { id } = req.params
    const updatedTodo = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            success: false,
            message: 'Invalid Object id'
        })
    }

    try{
        const updated = await todoModel.findByIdAndUpdate(id, updatedTodo, {new: true})
        if(!updated){
            return res.status(404).json({
                success: false,
                message: 'Todo not found'
            })
        }
        return res.status(201).json({
            success: true,
            message: 'Todo updated successfully'
        })
    }catch(err){
        return res.status.json({
            success: false,
            message: `Server error, ${err}`
        })
    }
}

module.exports = updateTodo