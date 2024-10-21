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
        type: Date,
        required: true,
        get: function(date) {
            return date ? date.toLocaleDateString() : null;
        },
        set: function(date) {
            return date ? new Date(date) : null;
        }
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    tags: {
        type: [String],
        default: [],
    },
    completedAt: {
        type: Date,
        default: null,
    },
    recurrence: {
        type: String,
        enum: ['none' ,'daily', 'weekly', 'monthly'],
        default: 'none',
    },
    attachments: {
        type: [String],
        default: [],
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
