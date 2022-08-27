import { useState } from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import { useAppContext } from '../provider/appProvider';
import Button from './Button';
import DeleteModalComponent from './DeleteModalComponent';
import EditModalComponent from './EditModalComponent';
import Ellipsis from './Ellipsis';
import Logo from './Logo';
import ModalComponent from './ModalComponent';

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
    openBoardModal,
    openEditBoardModal,
    openDeleteBoardModal,
    showDeleteBoard,
    setShowDeleteBoard,
  } = useAppContext();

  return (
    <Wrapper>
      <div className='logo'>
        <Logo />
      </div>
      <div className={showSidebar ? 'nav-center' : 'nav-center-expanded'}>
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
            <span
              className='grey'
              onClick={() => {
                openEditBoardModal();
                openDropdown();
              }}
            >
              Edit Board
            </span>

            <span
              className='danger'
              onClick={() => {
                openDeleteBoardModal();
                openDropdown();
              }}
            >
              Delete Board
            </span>
          </div>
          <EditModalComponent
            showEditBoard={showEditBoard}
            setShowEditBoard={setShowEditBoard}
          />
          <DeleteModalComponent
            showDeleteBoard={showDeleteBoard}
            setShowDeleteBoard={setShowDeleteBoard}
          />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
