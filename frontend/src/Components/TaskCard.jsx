import { Clock, MoreVertical, AlertTriangle, Flag, CheckCircle2 } from 'lucide-react';

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


export function TaskCard({ task, onClick }){
  const priorityStyles = getPriorityStyles(task.priority);

  return (
    <div 
      className="bg-slate-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 relative group cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <div className="w-6 h-6 rounded-full border-2 border-gray-300 mt-1 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        
        <div className="flex-1 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-white truncate pr-2">{task.title}</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical size={20} />
            </button>
          </div>
          
          <p className="text-gray-400 text-md overflow-hidden text-ellipsis line-clamp-1 break-words">
            {task.description}
          </p>
          
          <div className="flex justify-between items-center"> 
            <div 
              className={`
                flex items-center space-x-1 px-2 py-1 rounded-full
                ${priorityStyles.bg} ${priorityStyles.text}
              `}
            >
              {priorityStyles.icon}
              <span className="text-xs uppercase font-medium">{task.priority}</span>
            </div>

            <div className="flex items-center space-x-1 text-gray-300">
              <Clock size={15} />
              <span className="text-[0.88rem]">{task.dueDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};