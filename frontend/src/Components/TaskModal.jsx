import { RotateCcw, Clock, X, AlertTriangle, Flag, CheckCircle2  } from 'lucide-react';

const getPriorityStyles = (priority) => {
  switch (priority.toLowerCase()) {
    case 'high':
      return {
        bg: 'bg-red-200',
        text: 'text-red-800',
        icon: <AlertTriangle className="text-red-800" size={16} />
      };
    case 'medium':
      return {
        bg: 'bg-yellow-200',
        text: 'text-yellow-800',
        icon: <Flag className="text-yellow-800" size={16} />
      };
    case 'low':
      return {
        bg: 'bg-green-200',
        text: 'text-green-800',
        icon: <CheckCircle2 className="text-green-800" size={16} />
      };
    default:
      return {
        bg: 'bg-gray-100',
        text: 'text-gray-600',
        icon: null
      };
  }
};

export function TaskModal({ task, isOpen, onClose }) {

    if (!isOpen) return null;
    const priorityStyles = getPriorityStyles(task.priority);
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-slate-600/50 backdrop-blur-sm"
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
            <div className="flex-1">
              <h3 className={`text-xl font-semibold mb-3  ${task.status ? 'line-through' : ''}`}>{task.title}</h3>
              <p className={`text-slate-400 mb-6  ${task.status ? 'line-through' : ''}`}>{task.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="text-sm text-slate-300 mb-1">Due Date</div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {task.dueDate}
                  </div>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="text-sm text-slate-300 mb-1">Recurrence</div>
                  <div className="flex items-center gap-2">
                    <RotateCcw size={16} />
                    {task.recurrence}
                  </div>
                </div>
              </div>

              <div className='flex justify-between'>
                <div
                className={`
                  flex items-center space-x-1 px-2 py-1 rounded-full
                  ${priorityStyles.bg} ${priorityStyles.text}
                `}
                >
                  {priorityStyles.icon}
                  <span className="text-xs uppercase font-medium">{task.priority}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};