import React, { useContext, useReducer } from 'react';
import reducer from './reducer';
import { TOGGLE_SIDEBAR, TOGGLE_THEME } from './actions';

const initialState = {
  isLoading: false,
  showSidebar: true,
  showSidebarToggler: true,
  darkMode: true,
  handleToggleTheme: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleToggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  return (
    <AppContext.Provider value={{ ...state, toggleSidebar, handleToggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
