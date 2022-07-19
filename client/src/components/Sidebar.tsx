import Wrapper from '../assets/wrappers/Sidebar';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { ReactComponent as Icon } from '../assets/images/icon-board.svg';

const Sidebar = () => {
  return (
    <Wrapper>
      <div
        className='sidebar-container'
        // {
        //   showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        // }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <p className='sidebar-title'>
            All Boards <span>(3)</span>{' '}
          </p>
          <NavLinks />
          <div className='nav-link create-board'>
            <span className='icon'>
              <Icon />
            </span>
            + Create New Board
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Sidebar;
