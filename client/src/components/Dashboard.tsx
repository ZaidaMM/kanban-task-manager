import Wrapper from '../assets/wrappers/Dashboard';
import Button from './Button';
import { ReactComponent as ShowSidebar } from '../assets/images/icon-show-sidebar.svg';
import { useAppContext } from '../provider/appProvider';

const Dashboard = () => {
  const { selectedBoard, showSidebarToggler, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div className='dashboard-container'>
        {!selectedBoard ? (
          <></>
        ) : selectedBoard ? (
          <>
            {' '}
            <h1>{selectedBoard?.name}: Columns data should be here</h1>{' '}
          </>
        ) : (
          <>
            <p className='dashboard-message'>
              This board is empty. Create a new column to get started.
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
