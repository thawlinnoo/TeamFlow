import type { BoardTask } from '../types/board';

type TaskCardProps = {
  task: BoardTask;
};

export function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.priority}</p>
    </div>
  );
}
