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
  completedSubtasks? : number;
  totalSubtasks?:number;

}

export interface ISubtasksData {
  subtaskTitle: string;
  isCompleted?: number | string;
  totalSubtasks: number | string;
  customClass?: string;
}