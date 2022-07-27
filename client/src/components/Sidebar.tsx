import Wrapper from '../assets/wrappers/Sidebar';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { ReactComponent as Icon } from '../assets/images/icon-board.svg';
import ModeToggler from './ModeToggler';
import SidebarToggler from './SidebarToggler';
import { useAppContext } from '../context/appContext';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  const [boards, setBoards] = useState([]);

  const getBoards = () => {
    fetch('http://localhost:5000/api/boards')
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
        // setLoading(false);
      });
  };
  console.log(boards);

  useEffect(() => {
    getBoards();
    // eslint - disable - next - line;
  }, []);
  console.log(boards);

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <p className='sidebar-title'>
            All Boards <span>({boards.length})</span>{' '}
          </p>
          <NavLinks />
          <div className='nav-link create-board'>
            <span className='icon'>
              <Icon />
            </span>
            + Create New Board
          </div>
        </div>
        <div className='toggle-container'>
          <ModeToggler />
          <SidebarToggler />
        </div>
      </div>
    </Wrapper>
  );
};
export default Sidebar;
