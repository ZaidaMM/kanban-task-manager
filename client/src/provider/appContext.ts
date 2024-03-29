import { ChangeEventHandler, createContext, FormEvent, HTMLAttributes, RefObject } from 'react';
import { IBoardsData, IColumnsData,
  ITasksData,
  ISubtasksData, } from '../interfaces/IBoardsData';
// import { IColumnsData } from '../interfaces/IColumnsData';

export interface IAppContext {
  boards: IBoardsData[] | undefined;
  board: IBoardsData | undefined;
  selectedBoard: IBoardsData | undefined;
  setSelectedBoard: (board: IBoardsData | undefined) => void;
  handleToggleTheme: () => void;
  toggleSidebar: () => void;
  setShowSidebar: (value:boolean) => void;
  showSidebar: boolean;
  setShowSidebarToggler: (value:boolean) => void;
  showSidebarToggler: boolean;
  columns: IColumnsData[] | undefined;
  column: IColumnsData | undefined;
  tasks: ITasksData[] | undefined;
  task: ITasksData | undefined;
  selectedTask: ITasksData | undefined;
  setSelectedTask: (task: ITasksData | undefined) => void;
  setShowBoardModal: (value:boolean) => void;
  showBoardModal: boolean;
  openBoardModal: () => void;
  openEditBoardModal: () => void;
  openDeleteBoardModal: () => void;
  // boardModalRef:React.useRef<HTMLButtonElement>(null);
  createBoard: () => void;
  handleSubmit: (event:FormEvent<HTMLFormElement>) => void;
  setShowEditBoard: (value: boolean) => void;
  showEditBoard: boolean;
  setShowDeleteBoard: (value: boolean) => void;
  showDeleteBoard: boolean;
  openShowEditBoard: () => void;
  setShowTaskModal: (value:boolean) => void;
  showTaskModal: boolean;
  setShowEditTask: (value: boolean) => void;
  showEditTask: boolean;
  openEditTaskModal: () => void;
  // openShowEditTask: () => void;
  openTaskModal: () => void;
  openDropdown: () => void;
  showDropdown:boolean;
  setShowDropdown:(value: boolean) => void;
  isEditing: boolean;
  setIsEditing:(value:boolean) => void;
  isTaskEditing: boolean;
  setIsTaskEditing:(value:boolean) => void;
  // handleInputChange: (event:ChangeEventHandler<HTMLElement>) => void;
  // clearBoardForm:(event:FormEvent<HTMLFormElement> | undefined) => void
}

export const AppContext = createContext<IAppContext | undefined>(undefined);
