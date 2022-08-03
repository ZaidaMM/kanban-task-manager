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
  // const [tasks, setTasks] = useState<ITasksData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSidebar, setShowSidebar] = useState(true);
  const [showSidebarToggler, setShowSidebarToggler] = useState(true);

  // const params = useParams();

  // const { selectedColumnId } = useParams();

  let API_URL = 'http://localhost:5000/api/boards?';

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

  // console.log(selectedBoardId);

  const selectedBoardId = selectedBoard?._id;
  console.log(selectedBoardId);

  const getColumns = () => {
    boards.filter((board) => {
      if (board._id === selectedBoard?._id) {
        fetch(`http://localhost:5000/api/boards?/${board._id}/columns?`)
          .then((response) => {
            if (response.ok) {
              console.log(response);
              return response.json();
            }
            throw response;
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
      }
    });

    // if (selectedBoard) {
    //   console.log(selectedBoard);
    //   fetch(`http://localhost:5000/api/boards?/:${selectedBoardId}/columns?`)
    //     .then((response) => {
    //       if (response.ok) {
    //         console.log(response);
    //         return response.json();
    //       }
    //       throw response;
    //     })

    //     .then((data) => {
    //       setColumns(data);
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       console.log('error fetching data:', error);
    //       // setError(error);
    //     })
    //     .finally(() => {
    //       // setIsLoading(false);
    //     });

    //   console.log(columns);
    // }
  };

  useEffect(() => {
    getColumns();
    // eslint - disable - next - line;
  }, []);
  console.log(columns);

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
        // selectedColumn
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
