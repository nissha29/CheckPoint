import React, { useState } from 'react';
import { Plus, CheckSquare } from 'lucide-react';
import { TaskCard } from '../Components/TaskCard.jsx';
import { TaskModal } from '../Components/TaskModal.jsx';
import { EmptyState } from '../Components/EmptyState.jsx';

const TaskDashboard = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  
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