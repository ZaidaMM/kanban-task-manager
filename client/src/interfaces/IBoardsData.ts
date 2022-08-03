export interface IBoardsData {
  name: string;
  _id: string;
  columns?:IColumnsData[];
  customClass?: string;
 
}

export interface IColumnsData {
  name: string,
  _id: string
  tasks?: ITasksData[];
  quantity? : number | string;
  customClass?: string;
}

export interface ITasksData {
  title: string;
  description?: string;
  status?: string;
  customClass?: string;
  subtasks?: ISubtasksData[]
}

export interface ISubtasksData {
  subtitle: string;
  isCompleted?: number | string;
  totalSubtasks: number | string;
  customClass?: string;
}