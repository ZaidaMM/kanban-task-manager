export interface IBoardsData {
  name: string | undefined;
  _id: string | number;
  columns?:IColumnsData[];
  customClass?: string;
 
}

export interface IColumnsData {
  name: string | undefined;
  _id: string | number;
  tasks?: ITasksData[];
  quantity? : number | string;
  customClass?: string;
  color?: string;
}

export interface ITasksData {
  title: string;
  description?: string;
  status?: string;
  customClass?: string;
  subtasks?: ISubtasksData[];
  
}

export interface ISubtasksData {
  subtitle: string;
  isCompleted?: number | string;
  totalSubtasks: number | string;
  customClass?: string;
}