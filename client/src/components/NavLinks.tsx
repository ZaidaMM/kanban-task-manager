// import { NavLink } from 'react-router-dom';
import { ReactComponent as Icon } from '../assets/images/icon-board.svg';
import { useAppContext } from '../provider/appProvider';

const NavLinks = () => {
  const { boards, selectedBoard, setSelectedBoard } = useAppContext();
  console.log(selectedBoard);
  return (
    <div>
      {boards?.map((board) => {
        return (
          <div
            onClick={() => {
              setSelectedBoard(board);
            }}
            // to='/'
            // {`/api/boards/${board._id}`}
            key={board._id}
            className='nav-link'
            // {({ isActive }) =>
            //     isActive ? 'nav-link active' : 'nav-link'
            //   }
          >
            <span className='icon'>
              <Icon />
            </span>
            {board.name}
          </div>
        );
      })}
    </div>
  );
};
export default NavLinks;
