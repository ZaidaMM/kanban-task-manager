import { TOGGLE_SIDEBAR } from './actions';
import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
      showSidebarToggler: !state.showSidebarToggler,
    };
  }

  throw new Error(`No such action: ${action.type}`);
};
export default reducer;
