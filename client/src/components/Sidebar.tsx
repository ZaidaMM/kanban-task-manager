import Wrapper from '../assets/wrappers/Sidebar';
import Logo from './Logo';

const Sidebar = () => {
  return (
    <Wrapper>
      <div className='sidebar-container '>
        <div className='content show-sidebar'>
          <div className='header'>
            <Logo />
          </div>
          <p className='sidebar-title'>
            All Boards <span>(3)</span>{' '}
          </p>
          <h3 className='board-title'>Board1</h3>
          <h3 className='board-title'>Board2</h3>
          <h3 className='board-title'>Board3</h3>
        </div>
      </div>
    </Wrapper>
  );
};
export default Sidebar;
