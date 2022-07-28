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
            key={board._id}
            className='nav-link'
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
