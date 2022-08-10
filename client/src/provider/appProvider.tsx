import {
  ReactNode,
  useState,
  useEffect,
  useContext,
  ChangeEventHandler,
} from 'react';
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

  ////// GET BOARDS //////
  const data = { name: board?.name, columns: board?.columns };
  console.log(data);
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
  // console.log(boards);

  ////// CREATE BOARD //////

  const createBoard = () => {
    const data = { name: board?.name };
    console.log(data);

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: board?.name }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setBoard(data);
        // getColumns();
        console.log('Success', data);
      })
      .catch((error) => {
        console.log('error fetching data:', error);
        // setError(error);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };

  ////// GET SINGLE BOARD //////
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

  ////// GET BOARD COLUMNS //////
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

  ////// OPEN BOARD MODAL //////
  const openBoardModal = () => {
    setShowBoardModal((prevShowBoardModal) => !prevShowBoardModal);
  };

  const handleToggleTheme = () => {
    console.log('handleToggleTheme');
  };

  ////// TOGGLE SIDEBAR//////
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setShowSidebarToggler(!showSidebarToggler);
  };

  ////// SUBMIT BOARD FORM//////
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createBoard();

    console.log(board);
  };

  ////// CLEAR BOARD FORM//////
  const clearBoardForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Clear values');
  };

  ////// HANDLE CHANGE//////
  // const handleInputChange = (e: ChangeEventHandler) => {
  //   console.log('Input changed');
  // };

  ////// PROVIDER //////
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
        createBoard,
        handleSubmit,
        clearBoardForm,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
