import { ChangeEventHandler, createContext, FormEvent } from 'react';
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
  // selectedColumn: IColumnsData | undefined;
  // setSelectedColumn: (column: IColumnsData | undefined) => void;
  setShowBoardModal: (value:boolean) => void;
  showBoardModal: boolean;
  openBoardModal: () => void;
  createBoard: () => void;
  handleSubmit: (event:FormEvent<HTMLFormElement>) => void;
  clearBoardForm:(event:FormEvent<HTMLFormElement>) => void
}

export const AppContext = createContext<IAppContext | undefined>(undefined);
