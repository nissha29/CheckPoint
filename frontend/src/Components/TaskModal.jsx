import { Paperclip, RotateCcw, Clock, X } from 'lucide-react';

export function TaskModal({ task, isOpen, onClose }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <div className="relative bg-slate-800 rounded-xl p-6 w-full max-w-2xl mx-4">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>
  
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full border-2 border-slate-600 mt-1"></div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">{task.title}</h3>
              <p className="text-slate-400 mb-6">{task.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="text-sm text-slate-400 mb-1">Due Date</div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {task.dueDate}
                  </div>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="text-sm text-slate-400 mb-1">Recurrence</div>
                  <div className="flex items-center gap-2">
                    <RotateCcw size={16} />
                    {task.recurrence}
                  </div>
                </div>
              </div>
  
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <span className={`px-2 py-1 rounded ${getPriorityStyles(task.priority)}`}>
                  {task.priority}
                </span>
                <div className="flex items-center gap-2">
                  <Paperclip size={16} />
                  {task.attachments} attachments
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-600"></div>
                  {task.assignee}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};