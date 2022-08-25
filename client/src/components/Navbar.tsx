import { useState } from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import { useAppContext } from '../provider/appProvider';
import Button from './Button';
import Ellipsis from './Ellipsis';

const Navbar = () => {
  const {
    selectedBoard,
    boards,
    showSidebar,
    showEditBoard,
    setShowEditBoard,
    openShowEditBoard,
    showDropdown,
    openDropdown,
  } = useAppContext();

  return (
    <Wrapper>
      <div className={showSidebar ? 'nav-center' : 'nav-center expanded'}>
        <div className='nav-header'>
          <h1 className='nav-title '>{selectedBoard?.name}</h1>
        </div>
        <div className='nav-buttons '>
          <Button
            children={'+ Add New Task'}
            onClick={() => console.log('button clicked')}
            customClass='btn'
          />
          <Ellipsis onClick={() => openDropdown()} />
          <div className={showDropdown ? 'dropdown show-dropdown' : 'dropdown'}>
            <span className='grey'>Edit Board</span>
            <span className='danger'>Delete Board</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
