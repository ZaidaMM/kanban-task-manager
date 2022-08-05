// import Wrapper from '../assets/wrappers/Dashboard';
import Button from './Button';
import { ReactComponent as ShowSidebar } from '../assets/images/icon-show-sidebar.svg';
import { useAppContext } from '../provider/appProvider';
import Board from './Board';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { selectedBoard, showSidebarToggler, toggleSidebar } = useAppContext();

  const params = useParams();
  const { boardId } = useParams();
  return (
    // <Wrapper>
    <div className='dashboard-container'>
      {/* <Board /> */}
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
    </div>
    // </Wrapper>
  );
};
export default Dashboard;
