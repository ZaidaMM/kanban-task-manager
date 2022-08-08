import { ReactNode, useState, useEffect, useContext } from 'react';
import {
  IBoardsData,
  IColumnsData,
  ITasksData,
  ISubtasksData,
} from '../interfaces/IBoardsData';
import { AppContext } from './appContext';
import { useParams } from 'react-router-dom';

function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('AppContext used within AppProvider');
  }
  return context;
}

const AppProvider = (props: { children: ReactNode }) => {
  const [boards, setBoards] = useState<IBoardsData[]>([]);
  const [board, setBoard] = useState<IBoardsData>();
  const [selectedBoard, setSelectedBoard] = useState<IBoardsData | undefined>();
  const [columns, setColumns] = useState<IColumnsData[]>([]);
  const [column, setColumn] = useState<IColumnsData>();
  // const [tasks, setTasks] = useState<ITasksData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSidebar, setShowSidebar] = useState(true);
  const [showSidebarToggler, setShowSidebarToggler] = useState(true);
  const [showBoardModal, setShowBoardModal] = useState(false);
  const params = useParams();
  // const selectedBoardId = useParams();

  let API_URL = 'http://localhost:5000/api/boards?';
  const idUrl = selectedBoard?._id;
  const columnsUrl = selectedBoard?.columns;

  const getBoards = () => {
    fetch(API_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setBoards(data);
        // console.log(data);
      })
      .catch((error) => {
        console.log('error fetching data:', error);
        // setError(error);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };
  useEffect(() => {
    getBoards();
    // eslint - disable - next - line;
  }, []);
  // console.log(boards);

  const handleToggleTheme = () => {
    console.log('handleToggleTheme');
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setShowSidebarToggler(!showSidebarToggler);
  };

  // console.log(selectedBoard);
  // console.log(selectedBoard?._id);

  const getBoard = () => {
    fetch(API_URL + idUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setSelectedBoard(data);
        getColumns();
        console.log(data);
      })
      .catch((error) => {
        console.log('error fetching data:', error);
        // setError(error);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };

  useEffect(() => {
    getBoard();
    // eslint - disable - next - line;
  }, []);
  // console.log(selectedBoard);

  const getColumns = () => {
    fetch(API_URL + idUrl + columnsUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setColumns(data);
        console.log(columns);
      })
      .catch((error) => {
        console.log('error fetching data:', error);
        // setError(error);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };

  console.log(selectedBoard?.columns);

  useEffect(() => {
    getColumns();
    // eslint - disable - next - line;
  }, []);
  console.log(columns);

  const openBoardModal = () => {
    setShowBoardModal((prevShowBoardModal) => !prevShowBoardModal);
  };

  return (
    <AppContext.Provider
      value={{
        boards,
        board,
        handleToggleTheme,
        toggleSidebar,
        selectedBoard,
        setSelectedBoard,
        setShowSidebar,
        showSidebar,
        setShowSidebarToggler,
        showSidebarToggler,
        columns,
        column,
        // selectedColumn,
        showBoardModal,
        setShowBoardModal,
        openBoardModal,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
