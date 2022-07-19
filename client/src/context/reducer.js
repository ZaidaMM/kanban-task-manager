import { TOGGLE_SIDEBAR, TOGGLE_THEME } from './actions';
import { initialState } from './appContext';

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

  throw new Error(`No such action: ${action.type}`);
};
export default reducer;
