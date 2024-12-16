const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId

const todoSchema = new Schema({
    userId: {
        type: objectId,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    recurrence: {
        type: String,
        enum: ['none' ,'daily', 'weekly', 'monthly'],
        default: 'none',
    },
    deleted: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

const todoModel = mongoose.model('Todos', todoSchema); 
module.exports = todoModel;
