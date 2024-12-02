import { Plus } from 'lucide-react';

export function EmptyState(){
    return <div className="text-center py-12">
      <div className="bg-slate-800 rounded-xl p-8 max-w-md mx-auto">
        <h3 className="text-xl font-semibold mb-2">No tasks yet</h3>
        <p className="text-slate-400 mb-6">Get started by creating your first task</p>
        <button className="px-4 py-2 bg-blue-600 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 mx-auto">
          <Plus size={20} />
          <span>Create First Task</span>
        </button>
      </div>
    </div>
};