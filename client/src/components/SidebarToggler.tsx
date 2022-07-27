import { ReactComponent as HideSidebar } from '../assets/images/icon-hide-sidebar.svg';
import { ReactComponent as ShowSidebar } from '../assets/images/icon-show-sidebar.svg';
import { useAppContext } from '../provider/appProvider';
import { useState } from 'react';

const SidebarToggler = () => {
  const { toggleSidebar } = useAppContext();

  return (
    <div
      // className={
      //   showSidebarToggler
      //     ? 'sidebar-toggler show-sidebar-toggler'
      //     : 'sidebar-toggler'
      // }
      onClick={toggleSidebar}
    ></div>
  );
};
export default SidebarToggler;
