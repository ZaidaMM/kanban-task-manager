import { ReactComponent as HideSidebar } from '../assets/images/icon-hide-sidebar.svg';
import { ReactComponent as ShowSidebar } from '../assets/images/icon-show-sidebar.svg';
import { useAppContext } from '../context/appContext';
import { useState } from 'react';

const SidebarToggler = () => {
  const { toggleSidebar, showSidebarToggler, showSidebar } = useAppContext();

  return (
    <div
      className={
        showSidebarToggler
          ? 'sidebar-toggler show-sidebar-toggler'
          : 'sidebar-toggler'
      }
      onClick={toggleSidebar}
    >
      {showSidebarToggler ? (
        <>
          <HideSidebar className='hide-sidebar-icon' /> Hide Sidebar
        </>
      ) : (
        <>{/* <ShowSidebar className='show-sidebar-icon' /> */}</>
      )}
    </div>
  );
};
export default SidebarToggler;
