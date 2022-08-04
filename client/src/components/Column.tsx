import Wrapper from '../assets/wrappers/ColumnContainer';
import { useAppContext } from '../provider/appProvider';
import { IColumnsData } from '../interfaces/IBoardsData';
import Task from './Task';

const Column = ({ customClass, name, quantity, _id }: IColumnsData) => {
  const { columns, selectedBoard } = useAppContext();

  return (
    <Wrapper>
      <div className='column-container'>
        <div className='column-name'>
          <span className={customClass}></span>
          <p className='column-title' key={_id}>
            {name} (<span>{quantity}</span>)
          </p>
        </div>
        <div className='tasks-container'></div>

        {/* <div className='column-name'>
          <div>
            {columns?.map((col) => (
              <>
                <span className={col.customClass}></span>
                <p className='column-title' key={col._id}>
                  {col.name} (<span>{col.quantity}</span>)
                </p>
              </>
            ))}
          </div>
        </div> */}
      </div>
    </Wrapper>
  );
};
export default Column;
