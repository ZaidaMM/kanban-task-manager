import Dashboard from '../components/Dashboard';
import { useAppContext } from '../provider/appProvider';
import { ReactComponent as ShowSidebar } from '../assets/images/icon-show-sidebar.svg';
import Board from '../components/Board';
import InitialMessage from '../components/InitialMessage';

const LandingPage = () => {
  const { selectedBoard, showSidebarToggler, toggleSidebar } = useAppContext();
  return (
    <>
      <div
        className={
          showSidebarToggler
            ? 'show-icon-container hide-icon-container'
            : 'show-icon-container '
        }
        onClick={toggleSidebar}
      >
        {' '}
        {showSidebarToggler ? (
          <></>
        ) : (
          <>
            {' '}
            <ShowSidebar
              className='show-sidebar-icon'
              onClick={toggleSidebar}
            />
          </>
        )}
      </div>
      <div> {selectedBoard ? <Dashboard /> : <InitialMessage />}</div>
    </>
  );
};
export default LandingPage;
