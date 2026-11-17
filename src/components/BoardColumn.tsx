import type { BoardTask, TaskStatus } from '../types/board';
import { TaskCard } from './TaskCard';

type BoardColumnProps = {
  status: TaskStatus;
  tasks: BoardTask[];
  onMoveTask: (
    taskId: string,
    newStatus: TaskStatus
  ) => void;
  viewTaskDetails: (
    taskId: string
  ) => void
};

export function BoardColumn({ status, tasks, onMoveTask, viewTaskDetails }: BoardColumnProps) {
  return (
    <section className="panel">
      <h2>{status}</h2>
      {tasks.length === 0 ? (
        <p>No tasks in this column.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskCard task={task} onMoveTask={onMoveTask} viewTaskDetails={viewTaskDetails} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
