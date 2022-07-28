import { ReactComponent as HideSidebar } from '../assets/images/icon-hide-sidebar.svg';

import { useAppContext } from '../provider/appProvider';
import { useState } from 'react';

const SidebarToggler = () => {
  const { toggleSidebar, showSidebarToggler } = useAppContext();

  return (
    <div
      className={
        showSidebarToggler
          ? 'sidebar-toggler show-sidebar-toggler'
          : 'sidebar-toggler'
      }
      onClick={toggleSidebar}
    >
      {' '}
      {showSidebarToggler ? (
        <>
          <HideSidebar className='hide-sidebar-icon' /> Hide Sidebar
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default SidebarToggler;
