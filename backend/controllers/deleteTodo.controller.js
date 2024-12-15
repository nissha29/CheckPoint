const mongoose = require("mongoose")
const todoModel = require("../models/todos.model.js")

const deleteTodo = async(req,res)=>{
    const { id } = req.params
    if(! mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            success: false,
            message: 'Invalid Object id'
        })
    }

    try{
        const todoToDelete = await todoModel.findByIdAndDelete(id)
        if(!todoToDelete){
            return res.status(404).json({
                success: false,
                message: 'No todo found to delete'
            })
        }
        return res.status(201).json({
            success: true,
            message: 'Todo deleted successfully'
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Server Error, ${err}`
        })
    }
}

module.exports = deleteTodo