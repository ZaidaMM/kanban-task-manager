import Wrapper from '../assets/wrappers/BoardContainer';
import { useAppContext } from '../provider/appProvider';
import Column from './Column';
// import Task from './Task';
import { IBoardsData, IColumnsData } from '../interfaces/IBoardsData';
import Button from './Button';

const Board = () => {
  const { columns, boards, selectedBoard } = useAppContext();
  return (
    <Wrapper>
      <div className='board-container'>
        {!selectedBoard ? (
          <>
            {' '}
            <div className='message-container'>
              <p className='dashboard-message'>
                This board is empty. Create a new Column to get started.
              </p>
              <Button
                children='+ Add New Column'
                onClick={() => console.log('Add new column')}
              />
            </div>
          </>
        ) : (
          columns?.map((column) => (
            <Column
              key={column._id}
              name={column.name}
              _id={column._id}
              tasks={[]}
              customClass={`column-dot column-1`}
              quantity={columns.length}
            />
          ))
        )}

        {/* <div className='task'></div> */}
      </div>
    </Wrapper>
  );
};
export default Board;
