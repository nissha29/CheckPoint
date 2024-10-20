const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Types.objectId

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
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    tags: [{
        type: String
    }],
    completedAt: {
        type: Date,
        default: null,
    },
    recurrence: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'none'],
        default: 'none',
    },
    attachments: [{
        type: String  
    }],
    deleted: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

const todoModel = mongoose.model('Todos', todoSchema); 
module.exports = todoModel;
