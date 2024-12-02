import { Paperclip, Clock, ExternalLink } from 'lucide-react';

const getPriorityStyles = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-900/50 text-red-400';
      case 'medium':
        return 'bg-yellow-900/50 text-yellow-400';
      case 'low':
        return 'bg-green-900/50 text-green-400';
      default:
        return 'bg-slate-900/50 text-slate-400';
    }
};

export function TaskCard({ task, onClick }){
    <div 
      className="bg-slate-800 rounded-xl p-4 cursor-pointer hover:bg-slate-700/80 transition-colors"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="w-6 h-6 rounded-full border-2 border-slate-600 mt-1"></div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold truncate">{task.title}</h3>
            <ExternalLink size={16} className="text-slate-400" />
          </div>
          <p className="text-slate-400 mb-4 line-clamp-2">{task.description}</p>
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <span className={`px-2 py-1 rounded ${getPriorityStyles(task.priority)}`}>
              {task.priority}
            </span>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              {task.dueDate}
            </div>
            <div className="flex items-center gap-1">
              <Paperclip size={16} />
              <span>{task.attachments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
};