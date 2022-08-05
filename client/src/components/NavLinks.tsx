import { ReactComponent as Icon } from '../assets/images/icon-board.svg';
import { useAppContext } from '../provider/appProvider';
import { Link } from 'react-router-dom';

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
            key={board._id}
            className={
              selectedBoard?.name === board.name
                ? 'nav-link active'
                : 'nav-link'
            }
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
