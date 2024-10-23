const { z } =  require('zod')
const todoModel = require('../models/todos.model.js')

const createTodo = async(req,res)=>{
    const { title, description, status, dueDate, priority, tags, completedAt, recurrence, attachments, deleted } = req.body
    const userId = req.userId

    const requiredBody = z.object({
        title: z.string().min(3).max(200),
        description: z.string().min(5).max(2000),
    })

    const isParsedWithSuccess = requiredBody.safeParse(req.body)
    if(!isParsedWithSuccess.success){
        return res.status(400).json({
            message: `Please provide input value in correct format, ${isParsedWithSuccess.error}`
        })
    }

    try{
        await todoModel.create({
            userId,
            title,
            description,
            status,
            dueDate,
            priority,
            tags,
            completedAt,
            recurrence,
            attachments,
            deleted
        })
        return res.status(200).json({
            success: true,
            message: 'Todo created successfully!'
        })
    }catch(err){
        return res.status(500).json({
            message: `${err}, Server error`
        })
    }
}

module.exports = createTodo