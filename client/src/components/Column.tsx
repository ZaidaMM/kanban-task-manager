import Wrapper from '../assets/wrappers/ColumnContainer';
import { useAppContext } from '../provider/appProvider';
import { IColumnsData } from '../interfaces/IBoardsData';
// import Task from './Task';

const Column = ({ customClass, name, quantity }: IColumnsData) => {
  const { columns, selectedBoard } = useAppContext();

  return (
    <Wrapper>
      <div className='column-container'>
        <div className='column-name'>
          <div>
            {columns?.map((col) => (
              <>
                <span className={col.customClass}></span>
                <p className='column-title'>
                  {col.name} (<span>{col.quantity}</span>)
                </p>
              </>
            ))}
          </div>
        </div>
        {/* <div className='column-name'>
          <div>
            <span className='column-dot blue'></span>
            <p className='column-title'>
              TODO (<span>4</span>)
            </p>
          </div>
        </div>
        <div className='column-name'>
          <div>
            <span className='column-dot purple'></span>
            <p className='column-title'>
              DOING (<span>6</span>)
            </p>
          </div>
        </div>
        <div className=' column-name'>
          <div>
            <span className='column-dot green'></span>
            <p className='column-title'>
              DONE (<span>7</span>)
            </p>
          </div>
        </div> */}
      </div>
    </Wrapper>
  );
};
export default Column;
