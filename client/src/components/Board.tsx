import Wrapper from '../assets/wrappers/BoardContainer';
import { useAppContext } from '../provider/appProvider';
import Column from './Column';
// import Task from './Task';
import { IBoardsData, IColumnsData } from '../interfaces/IBoardsData';

const Board = () => {
  const { columns, boards } = useAppContext();
  return (
    <Wrapper>
      <div className='board-container'>
        {columns?.map((column) => (
          <Column
            key={column._id}
            name={column.name}
            _id={column._id}
            tasks={[]}
            customClass={`column-dot column-1`}
            quantity={columns.length}
          />
        ))}

        <div className='task'></div>
      </div>
    </Wrapper>
  );
};
export default Board;
