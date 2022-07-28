import { ReactNode, useState, useEffect, useContext } from 'react';
import { IBoardsData } from '../interfaces/IBoardsData';
import { AppContext } from './appContext';

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSidebar, setShowSidebar] = useState(true);
  const [showSidebarToggler, setShowSidebarToggler] = useState(true);

  // Fetch data
  let url = 'http://localhost:5000/api/boards';

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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
