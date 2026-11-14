export type TaskStatus = 'To Do' | 'In Progress' | 'Done';

export type BoardTask = {
  readonly id: string;
  title: string;
  status: TaskStatus;
  priority: 'Low' | 'Medium' | 'High';
};
