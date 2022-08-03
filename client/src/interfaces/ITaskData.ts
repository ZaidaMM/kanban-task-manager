export interface TaskProps {
  title: string;
  status?: string;
  description?: string;
  customClass?: string;
  subtask: SubtaskProps[]
}

export interface SubtaskProps {
  subtitle: string;
  isCompleted?: number | string;
  totalSubtasks: number | string;
}