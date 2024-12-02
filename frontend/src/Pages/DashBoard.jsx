import React, { useState } from 'react';
import { Search, Plus, Filter, ArrowUpDown, Paperclip, RotateCcw, Clock, X, ExternalLink, CheckSquare } from 'lucide-react';

// Priority color mapping utility
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

const TaskModal = ({ task, isOpen, onClose }) => {
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

const TaskCard = ({ task, onClick }) => (
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
);

const EmptyState = () => (
  <div className="text-center py-12">
    <div className="bg-slate-800 rounded-xl p-8 max-w-md mx-auto">
      <div className="mb-4">
        <Plus size={48} className="mx-auto text-slate-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2">No tasks yet</h3>
      <p className="text-slate-400 mb-6">Get started by creating your first task or try our example templates</p>
      <button className="px-4 py-2 bg-blue-600 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 mx-auto">
        <Plus size={20} />
        <span>Create First Task</span>
      </button>
    </div>
  </div>
);

const TaskDashboard = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([
    {
      title: 'Welcome to Checkpoint!',
      description: 'This is an example task to help you get started. Try creating your own task or explore our features.',
      priority: 'low',
      dueDate: '2024-12-01',
      recurrence: 'none',
      attachments: 1,
      assignee: 'You'
    },
    {
      title: 'Complete Project Proposal',
      description: 'Draft and review Q4 project proposal document with stakeholders',
      priority: 'high',
      dueDate: '2024-12-01',
      recurrence: 'weekly',
      attachments: 2,
      assignee: 'Alex Smith'
    },
    {
      title: 'Review Design System',
      description: 'Review and update the design system components for Q1 release',
      priority: 'medium',
      dueDate: '2024-12-15',
      recurrence: 'none',
      attachments: 1,
      assignee: 'Alex Smith'
    },
    {
      title: 'User Research',
      description: 'Conduct user interviews for the new feature development',
      priority: 'high',
      dueDate: '2024-12-10',
      recurrence: 'none',
      attachments: 3,
      assignee: 'Alex Smith'
    },
    {
      title: 'Team Planning',
      description: 'Quarterly team planning and goal setting session',
      priority: 'medium',
      dueDate: '2024-12-20',
      recurrence: 'quarterly',
      attachments: 0,
      assignee: 'Alex Smith'
    }
  ]);
  
  const stats = [
    { label: 'Total Tasks', value: '24', change: '+12%', icon: 'list' },
    { label: 'Completed', value: '18', change: '+8%', icon: 'check' },
    { label: 'In Progress', value: '6', change: '-2%', icon: 'trend' },
    { label: 'Completion Rate', value: '75%', change: '+5%', icon: 'chart' }
  ];

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 text-white">
      {/* Brand Header */}
      <div className="flex items-center gap-2 mb-8">
        <div className="bg-blue-600 p-2 rounded-xl">
          <CheckSquare size={28} />
        </div>
        <h1 className="text-[3rem] sm:text-[3rem] font-bold akaya-kanadaka-regular">Checkpoint</h1>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 lg:mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">Welcome back, Alex!</h1>
          <p className="text-slate-400">Here's an overview of your tasks</p>
        </div>
        <div className="flex w-full sm:w-auto gap-2 sm:gap-4">
          <button className="flex-1 sm:flex-none px-4 py-2 bg-slate-800 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-700">
            <span>Quick Add</span>
          </button>
          <button className="flex-1 sm:flex-none px-4 py-2 bg-blue-600 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700">
            <Plus size={20} />
            <span>New Task</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 lg:mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-slate-800 p-4 rounded-xl">
            <div className="text-slate-400 mb-2">{stat.label}</div>
            <div className="text-2xl font-semibold mb-2">{stat.value}</div>
            <div className={`text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {stat.change} vs last week
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full bg-slate-800 rounded-lg py-2 pl-10 pr-4 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2 sm:gap-4">
          <button className="flex-1 sm:flex-none px-4 py-2 bg-slate-800 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-700">
            <Filter size={20} />
            <span className="hidden sm:inline">Filter</span>
          </button>
          <button className="flex-1 sm:flex-none px-4 py-2 bg-slate-800 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-700">
            <ArrowUpDown size={20} />
            <span className="hidden sm:inline">Sort</span>
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="overflow-x-auto mb-6">
        <div className="flex gap-2 md:gap-4 min-w-min">
          {['All', 'Today', 'Upcoming', 'Completed'].map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                tab === 'All' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Task Grid with Empty State */}
      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tasks.map((task, index) => (
            <TaskCard 
              key={index} 
              task={task} 
              onClick={() => setSelectedTask(task)}
            />
          ))}
        </div>
      )}

      {/* Task Modal */}
      <TaskModal 
        task={selectedTask} 
        isOpen={!!selectedTask} 
        onClose={() => setSelectedTask(null)}
      />
    </div>
  );
};

export default TaskDashboard;