import { createContext } from 'react';
import { IBoardsData } from '../interfaces/IBoardsData';

export interface IAppContext {
  boards: IBoardsData[] | undefined;
  selectedBoard: IBoardsData | undefined;
  setSelectedBoard: (board: IBoardsData | undefined) => void;
  handleToggleTheme: () => void;
  toggleSidebar: () => void;
  setShowSidebar: (value:boolean) => void;
  showSidebar: boolean;
  setShowSidebarToggler: (value:boolean) => void;
  showSidebarToggler: boolean;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);
