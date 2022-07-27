import React, { useContext, useReducer, useState, useEffect } from 'react';
import reducer from './reducer';
import axios from 'axios';

import {
  TOGGLE_SIDEBAR,
  TOGGLE_THEME,
  CREATE_BOARD_BEGIN,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_ERROR,
  GET_BOARDS_BEGIN,
  GET_BOARDS_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  showSidebar: true,
  showSidebarToggler: true,
  darkMode: true,
  handleToggleTheme: false,
  boards: [],
  board: {},
  totalBoards: 0,
  name: '',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const API_URL = axios.create({ baseURL: 'http://localhost:5000/api/' });

  const handleToggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const getBoards = async () => {
    dispatch({ type: GET_BOARDS_BEGIN });

    try {
      const { data } = await axios.get('http://localhost:5000/api/boards');

      const { boards, name } = data;
      console.log(data);

      dispatch({
        type: GET_BOARDS_SUCCESS,
        payload: { boards, name },
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBoards();
    // eslint-disable-next-line
  }, []);
  // console.log(boards);

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleSidebar,
        handleToggleTheme,
        getBoards,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
