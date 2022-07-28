import Wrapper from '../assets/wrappers/Sidebar';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { ReactComponent as Icon } from '../assets/images/icon-board.svg';
import ModeToggler from './ModeToggler';
import SidebarToggler from './SidebarToggler';
import { useAppContext } from '../provider/appProvider';

const Sidebar = () => {
  const { boards, showSidebar } = useAppContext();

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
            All Boards <span>({boards?.length})</span>{' '}
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
