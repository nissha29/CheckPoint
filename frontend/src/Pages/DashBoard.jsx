import React, { useContext, useEffect, useState } from 'react';
import { Plus, CheckSquare, User, LogOut } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { TaskCard } from '../Components/TaskCard.jsx';
import { TaskModal } from '../Components/TaskModal.jsx';
import { EmptyState } from '../Components/EmptyState.jsx';
import CreateNewTask from '../Components/CreateNewTask.jsx';
import axios from 'axios';
import URL from '../../constants.js'
import { AuthContext } from '../Context/AuthContext.jsx';

const TaskDashboard = () => {
  const { signOut } = useContext(AuthContext)
  const location = useLocation();
  const name = (location.state?.name || 'user');
  const email = (location.state?.email || 'email');
  const [selectedTask, setSelectedTask] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isCreateNewTaskOpen, setIsCreateNewTaskOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currTab, setCurrTab] = useState('All');

  async function getTodos(){
    try{
      const response = await axios.get(
        `${URL}/todo`,
        {
          withCredentials: true,
        }
      )
      if(JSON.stringify(tasks) !== JSON.stringify(response.data.todos)){
        setTasks(response.data.todos);
      }
    }catch(err){
      console.log(err)
    }
  }

  function getStats(){
    let total = tasks.length;
    let completed = tasks.filter(task => (task.status === true)).length;
    let progress = total - completed;
    let completionRate = total > 0 
    ? ((completed / total) * 100).toFixed(2)
    : 0;

    return [
      { label: 'Total Tasks', value: total.toString() },
      { label: 'Completed', value: completed.toString() },
      { label: 'In Progress', value: progress.toString() },
      { label: 'Completion Rate', value: `${completionRate}%` }
    ];
  }

  const stats = getStats()

  useEffect(()=>{
    getTodos()
    getStats()
  },[])

  useEffect(()=>{
    getStats()
  },[tasks])

  async function handleEdit(updatedTask){
    try{
      const id = updatedTask.id
      await axios.patch(
        `${URL}/todo/${id}`,
        updatedTask,
        {
          withCredentials: true,
        }
      )
      getTodos()
    }catch(err){
      console.log(`Error in task deleting, /dashboard`)
    }
  }

  async function handleComplete(task){
    try{
      const id = task._id;
      await axios.patch(
        `${URL}/todo/${id}`,
        {
          status: true,
        },
        {
          withCredentials: true,
        }
      )
      getTodos();
    }catch(err){
      console.log(`Error in task updating as completed, /dashboard, ${err}`)
    } 
  }

  async function handleDelete(task){
    try{
      const id = task._id;
      await axios.delete(
        `${URL}/todo/${id}`,
        {
          withCredentials: true,
        }
      )
      getTodos();
    }catch(err){
      console.log(`Error in task deleting, /dashboard, ${err}`)
    }
  }

  function isTodayAndInProgress(date,status) {
    const today = new Date();
    const taskDate = new Date(date);
    return (
      ! status &&
      taskDate.getDate() === today.getDate() &&
      taskDate.getMonth() === today.getMonth() &&
      taskDate.getFullYear() === today.getFullYear()
    );
  }
  
  function isUpcoming(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    const taskDate = new Date(date);
    taskDate.setHours(0, 0, 0, 0);
    return taskDate > today;
  }
  
  function filterTasks(tasks, activeTab) {
    switch(activeTab) {
      case 'Today':
        return tasks.filter(task => isTodayAndInProgress(task.dueDate,task.status));
      case 'Upcoming':
        return tasks.filter(task => isUpcoming(task.dueDate));
      case 'Completed':
        return tasks.filter(task => task.status === true);
      default: 
        return tasks;
    }
  }
  
  const filteredTasks = filterTasks(tasks,currTab);

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 text-white">
      {/* Brand Header */}
      <div className='flex justify-between'>
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-blue-600 p-2 rounded-xl">
            <CheckSquare size={28} />
          </div>
          <h1 className="text-[3rem] sm:text-[3rem] font-bold akaya-kanadaka-regular">Checkpoint</h1>
        </div>

        <div className="relative group mt-5">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
            <User 
              size={20} 
              className="text-white" 
              onClick={()=>{
                setIsVisible(prev => !prev)
              }}
            />
          </div>
          
          {/* Dropdown Menu */}
          { isVisible && <div className="absolute right-0 mt-2 mr-2 w-60 bg-white border rounded-lg shadow-lg group-hover:block z-10">
            <div className="px-4 py-3 border-b">
              <p className="text-sm font-medium text-gray-800">Welcome to your profile, { name } </p>
              <p className="text-sm text-gray-500">{ email }</p>
            </div>
            <ul className="py-1">
              <li className='flex'>
                <LogOut className='text-gray-500 text-[0.15rem] ml-3 mt-2'/>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    signOut()
                  }}
                  className="block px-4 py-2 text-md text-red-600 hover:bg-gray-100 hover:cursor-pointer"
                >
                  Sign out
                </div>
              </li>
            </ul>
          </div>}
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 lg:mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">Welcome, {name}!</h1>
          <p className="text-slate-400">Here's an overview of your tasks</p>
        </div>
        <div className="flex w-full sm:w-auto gap-2 sm:gap-4">
          <button 
            onClick={() => setIsCreateNewTaskOpen(true)}
            className="flex-1 sm:flex-none px-4 py-2 bg-blue-600 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
          >
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
                tab === currTab ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'
              }`}
              onClick={()=>setCurrTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Task Grid with Empty State */}
      {filteredTasks.length === 0 ? (
        tasks.length === 0 ? 
        (<EmptyState setIsCreateNewTaskOpen={setIsCreateNewTaskOpen}/>) 
        : (
          <div className="flex flex-col items-center justify-center p-8 mt-10">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <CheckSquare size={24} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No tasks to show</h3>
            <p className="text-slate-400 text-center mb-4">There are no tasks matching your current filter.</p>
            <button
              onClick={() => setCurrTab('All')}
              className="px-4 py-2 text-md bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View all tasks
            </button>
          </div>
        )
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTasks.map((task, index) => (
            <TaskCard 
              key={index} 
              task={task} 
              onClick={() => setSelectedTask(task)}
              onEdit={handleEdit}
              onComplete={handleComplete}
              onDelete={handleDelete}
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

      {/* Create a new task */}
      <CreateNewTask
        isOpen={isCreateNewTaskOpen}
        onClose={() => setIsCreateNewTaskOpen(false)}
        getTodos={()=>getTodos()}
      />
    </div>
  );
};

export default TaskDashboard;