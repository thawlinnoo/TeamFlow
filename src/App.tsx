import type { BoardTask, TaskStatus } from './types/board';
import { BoardColumn } from './components/BoardColumn';
import '../prototype/shared.css';
import { useState, useRef } from 'react';

const initialTasks: BoardTask[] = [
  {
    id: 'task-1',
    title: 'Design landing',
    status: 'To Do',
    priority: 'High',
  },
  {
    id: 'task-2',
    title: 'Write content',
    status: 'To Do',
    priority: 'Medium',
  },
  {
    id: 'task-3',
    title: 'Build login',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: 'task-4',
    title: 'Setup project',
    status: 'Done',
    priority: 'Low',
  },
];

const statuses: TaskStatus[] = ['To Do', 'In Progress', 'Done'];


function App() {

  const [isFilter, setIsFilter] = useState(false)

  const [tasks, setTasks] = useState<BoardTask[]>(initialTasks)

  const [selectedTaskId, setSelectedTaskId] = useState< string | null > (null)

  const selectedTask = tasks.find(task => task.id === selectedTaskId)

  const helpDialogRef = useRef<HTMLDialogElement>(null)

  function handleClick(){
    setIsFilter(previous => !previous)
  }

  function moveTask(taskId: string, newStatus: TaskStatus){
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }
 

  const visibleTasks = isFilter
    ? tasks.filter((task) => task.priority === 'High')
    : tasks;

  return (
    <main>
      <h1>TeamFlow</h1>
      <p>Collaborate and manage your tasks.</p>

      <button type="button" onClick={handleClick} aria-pressed={isFilter}>
        High Priority only
      </button>


      <div className="board-columns">
        {statuses.map((status) => (
          <BoardColumn
            key={status}
            status={status}
            tasks={visibleTasks.filter((task) => task.status === status)}
            onMoveTask={moveTask}
            viewTaskDetails={setSelectedTaskId}
          />
        ))}
      </div>



      {selectedTask &&(
        <div>
          <h2>{selectedTask.title}</h2>
          <p>{selectedTask.status}</p>
          <p>{selectedTask.priority}</p>

          <button type="button" onClick={()=>setSelectedTaskId(null)}>
            Close
          </button>
        </div>

      )}

      <button 
        type="button"
        onClick={()=> helpDialogRef.current?.showModal()}
      >
        Board Help
      </button>

      <dialog ref={helpDialogRef} aria-labelledby='help-title'>
        <h2 id='help-title'>Board Help</h2>
        <p>Move your tasks between different status columns.</p>

        <button
          type="button"
          onClick={()=> helpDialogRef.current?.close()}
        >
          Close
        </button>


      </dialog>



    </main>
  );
}

export default App;

