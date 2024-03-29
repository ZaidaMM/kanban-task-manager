import Wrapper from '../assets/wrappers/Board';
import { useAppContext } from '../provider/appProvider';
import Column from './Column';
import InitialMessage from './InitialMessage';

const Board = () => {
  const { board, boards, column, columns, selectedBoard, setSelectedBoard } =
    useAppContext();

  const col = selectedBoard?.columns;
  console.log(col);
  if (col?.length == 0) {
    console.log(columns);
    return (
      <Wrapper>
        <InitialMessage />
      </Wrapper>
    );
  }

  if (!selectedBoard) {
    return (
      <Wrapper>
        <></>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className='board-container'>
        <div className='columns-container'>
          <div className='columns'>
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
              <div className='create-new-column'>
                <p>+ New Column</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Board;
