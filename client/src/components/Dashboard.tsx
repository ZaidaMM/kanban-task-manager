import Wrapper from '../assets/wrappers/Dashboard';
import Button from './Button';
import { ReactComponent as ShowSidebar } from '../assets/images/icon-show-sidebar.svg';
import { useAppContext } from '../provider/appProvider';
import Board from './Board';

const Dashboard = () => {
  const { selectedBoard, showSidebarToggler, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div className='dashboard-container'>
        {!selectedBoard ? (
          <></>
        ) : selectedBoard ? (
          <>
            <Board />
          </>
        ) : (
          <>
            <p className='dashboard-message'>
              <Board />
            </p>

            <Button
              children='+ Add New Column'
              onClick={() => console.log('Add new column')}
            />
          </>
        )}

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
    </Wrapper>
  );
};
export default Dashboard;
