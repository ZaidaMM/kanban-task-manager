import { Key } from "react";

export interface IBoardsData {
  _id: Key | null | undefined;
  name: string | undefined;
  // _id: string | number;
  columns?:IColumnsData[];
  customClass?: string;
 
}

export interface IColumnsData {
  _id: Key | null | undefined;
  name?: string | undefined;
  // _id: string | number;
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