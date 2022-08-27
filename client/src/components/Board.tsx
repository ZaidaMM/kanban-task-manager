import Wrapper from '../assets/wrappers/Board';
import { useAppContext } from '../provider/appProvider';
import Column from './Column';
import InitialMessage from './InitialMessage';

const Board = () => {
  const { columns, selectedBoard } = useAppContext();

  return (
    <Wrapper>
      <div className='board-container'>
        <div className='columns-container'>
          <div className='columns'>
            {selectedBoard?.columns ? (
              <>
                <div className='single-column'>
                  {selectedBoard?.columns?.map((column) => (
                    <Column
                      key={column._id}
                      name={column.name}
                      _id={column._id}
                      tasks={[]}
                      customClass={`${column.name}`}
                      quantity={columns?.length}
                    />
                  ))}
                </div>
                <div className='create-new-column'>
                  <p>+ New Column</p>
                </div>
              </>
            ) : (
              <InitialMessage />
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Board;
