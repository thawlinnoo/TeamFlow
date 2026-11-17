import type { BoardTask, TaskStatus } from '../types/board';

type TaskCardProps = {
  task: BoardTask;
  onMoveTask: (
    taskId: string,
    newStatus: TaskStatus
  ) => void;
  viewTaskDetails: (
    taskId: string
  ) => void

};

export function TaskCard({ task, onMoveTask, viewTaskDetails }: TaskCardProps) {
  const nextStatus: TaskStatus =
    task.status === 'To Do' ? 'In Progress' :
    task.status === 'In Progress' ? 'Done' : 'To Do';

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.priority}</p>
      <button
        type="button"
        onClick={() => onMoveTask(task.id, nextStatus)}
      >
        Move to {nextStatus}
      </button>

      <button type="button" onClick={()=> viewTaskDetails(task.id)}>
        View Task details
      </button>
    </div>
  );
}
