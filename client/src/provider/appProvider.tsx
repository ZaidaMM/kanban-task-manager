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
  const [selectedBoard, setSelectedBoard] = useState<IBoardsData | undefined>();
  const [columns, setColumns] = useState<IColumnsData[]>([]);
  // const [tasks, setTasks] = useState<ITasksData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSidebar, setShowSidebar] = useState(true);
  const [showSidebarToggler, setShowSidebarToggler] = useState(true);

  const params = useParams();
  // const { selectedBoardId } = useParams();
  // const { selectedColumnId } = useParams();

  let url = 'http://localhost:5000/api/boards?';

  const getBoards = () => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setBoards(data);
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
    getBoards();
    // eslint - disable - next - line;
  }, []);
  console.log(boards);

  const handleToggleTheme = () => {
    console.log('handleToggleTheme');
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setShowSidebarToggler(!showSidebarToggler);
  };

  console.log(selectedBoard);
  console.log(selectedBoard?._id);

  const selectedBoardId = useParams();
  console.log(selectedBoardId);

  const getColumns = () => {
    // console.log(selectedBoard);
    fetch(`http://localhost:5000/api/boards?/:${selectedBoard?._id}/columns?`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
        console.log(response);
      })
      .then((data) => {
        setColumns(data);
        console.log(data);
      })
      .catch((error) => {
        console.log('error fetching data:', error);
        // setError(error);
      })
      .finally(() => {
        // setIsLoading(false);
      });

    console.log(columns);
  };

  useEffect(() => {
    getColumns();
    // eslint - disable - next - line;
    console.log(columns);
  }, []);
  console.log(columns);

  // console.log(selectedColumn);
  // console.log(selectedColumn?._id);
  // console.log(selectedColumnId);

  // const getTasks = () => {
  //   console.log(tasks);
  // };

  return (
    <AppContext.Provider
      value={{
        boards,
        handleToggleTheme,
        toggleSidebar,
        selectedBoard,
        setSelectedBoard,
        setShowSidebar,
        showSidebar,
        setShowSidebarToggler,
        showSidebarToggler,
        columns,
        // selectedColumn
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
