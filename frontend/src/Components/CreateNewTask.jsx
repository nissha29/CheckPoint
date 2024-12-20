import { useState } from "react";
import { X } from 'lucide-react';
import axios from 'axios'
import URL from '../../constants.js'

export default function CreateNewTask({ isOpen, onClose, getTodos }){
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      dueDate: '',
      recurrence: 'none',
      priority: 'medium'
    });
  
    if (!isOpen) return null;

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            const response = await axios.post(
                `${URL}/todo`,
                formData,
                {
                    withCredentials: true
                }
            )
            setFormData({
              title: '',
              description: '',
              dueDate: '',
              recurrence: 'none',
              priority: 'medium'
            })
            getTodos()
            onClose()
        }catch(err){
            console.log(err)
        }
    }
  
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-slate-800 rounded-xl w-full max-w-lg mx-4 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Create New Task</h2>
            <button onClick={onClose} className="text-slate-400 hover:text-white">
              <X size={24} />
            </button>
          </div>
  
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 bg-slate-700 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.title}
                name="title"
                onChange={handleChange}
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                className="w-full px-3 py-2 bg-slate-700 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                rows="3"
                value={formData.description}
                name="description"
                onChange={handleChange}
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium mb-2">Due Date</label>
              <input
                type="date"
                required
                className="w-full px-3 py-2 bg-slate-700 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.dueDate}
                name="dueDate"
                onChange={handleChange}
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium mb-2">Recurrence</label>
              <select
                className="w-full px-3 py-2 bg-slate-700 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.recurrence}
                name="recurrence"
                onChange={handleChange}
              >
                <option value="none">None</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
  
            <div>
              <label className="block text-sm font-medium mb-2">Priority</label>
              <select
                className="w-full px-3 py-2 bg-slate-700 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.priority}
                name="priority"
                onChange={handleChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
  
            <button
              type="submit"
              className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Task
            </button>
          </form>
        </div>
      </div>
    );
  };