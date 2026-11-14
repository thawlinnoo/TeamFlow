import type { BoardTask, TaskStatus } from './types/board';
import { BoardColumn } from './components/BoardColumn';
import '../prototype/shared.css';

const tasks: BoardTask[] = [
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
  return (
    <main>
      <h1>TeamFlow</h1>
      <p>Collaborate and manage your tasks.</p>
      <div className="board-columns">
        {statuses.map((status) => (
          <BoardColumn
            key={status}
            status={status}
            tasks={tasks.filter((task) => task.status === status)}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
