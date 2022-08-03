import Wrapper from '../assets/wrappers/BoardContainer';
import { useAppContext } from '../provider/appProvider';
import Column from './Column';
// import Task from './Task';
import { IBoardsData, IColumnsData } from '../interfaces/IBoardsData';
import Button from './Button';
// import { boards } from '../utils/boards';
import { Message } from './InitialMessage';

const Board = () => {
  const { columns, selectedBoard } = useAppContext();
  return (
    <Wrapper>
      <div className='board-container'>
        {!selectedBoard ? (
          <>
            {' '}
            <Message />
          </>
        ) : (
          <>
            {selectedBoard.columns?.map((col) => {
              return (
                <div>
                  <h1>{col.name}</h1>{' '}
                  <p>
                    {col.quantity}, board id: {selectedBoard._id}
                  </p>
                </div>
              );
            })}

            <Column name={''} _id={''} />
            {/* {columns?.map((column) => (
              <Column
                key={column._id}
                name={column.name}
                _id={column._id}
                tasks={[]}
                customClass={`column-dot`}
                quantity={columns.length}
              />
            ))} */}
          </>
        )}

        {/* <div className='task'></div> */}
      </div>
    </Wrapper>
  );
};
export default Board;
