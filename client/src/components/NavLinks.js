import { NavLink } from 'react-router-dom';
import boards from '../utils/boards';
import { ReactComponent as Icon } from '../assets/images/icon-board.svg';

const NavLinks = () => {
  return (
    <div className='nav-links'>
      {boards.map((board) => {
        const { title, id, path } = board;

        return (
          <NavLink
            to={path}
            key={id}
            className='nav-link'
            // {({ isActive }) =>
            //   isActive ? 'nav-link active' : 'nav-link'
            // }
          >
            <span className='icon'>
              <Icon />
            </span>
            {title}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
