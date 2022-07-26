import { initialState } from './appContext';
import {
  TOGGLE_SIDEBAR,
  TOGGLE_THEME,
  CREATE_BOARD_BEGIN,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_ERROR,
  GET_BOARDS_BEGIN,
  GET_BOARDS_SUCCESS,
} from './actions';

const reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
      showSidebarToggler: !state.showSidebarToggler,
    };
  }

  if (action.type === TOGGLE_THEME) {
    return {
      ...state,
      handleToggleTheme: !state.handleToggleTheme,
    };
  }

  if (action.type === CREATE_BOARD_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === CREATE_BOARD_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === CREATE_BOARD_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === GET_BOARDS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === GET_BOARDS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      boards: action.payload.boards,
    };
  }

  throw new Error(`No such action: ${action.type}`);
};
export default reducer;
