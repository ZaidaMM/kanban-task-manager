import Wrapper from '../assets/wrappers/ColumnContainer';
import { useAppContext } from '../provider/appProvider';
import { IColumnsData } from '../interfaces/IBoardsData';
// import Task from './Task';

const Column = ({ customClass, name, quantity }: IColumnsData) => {
  const { columns } = useAppContext();
  return (
    <Wrapper>
      <div className='column-container'>
        <div className='column-name'>
          <div>
            <span className={customClass}></span>
            <p className='column-title'>
              {name} (<span>{quantity}</span>)
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Column;
