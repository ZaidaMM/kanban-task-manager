import Wrapper from '../assets/wrappers/Column';
import { useAppContext } from '../provider/appProvider';
import { IColumnsData } from '../interfaces/IBoardsData';
import Task from './Task';

const Column = ({ customClass, name, quantity, _id }: IColumnsData) => {
  const { columns, selectedBoard } = useAppContext();

  return (
    <Wrapper>
      <div className='column-container'>
        <div className='column-name'>
          <span className={customClass?.toLowerCase()}></span>
          <p className='column-title' key={_id}>
            {name} (<span>{quantity}</span>)
          </p>
        </div>
        <div>
          <Task
            key={1}
            title={'Build UI for onboarding flow'}
            description={''}
            status={'Todo'}
            _id={undefined}
          />
        </div>
      </div>
    </Wrapper>
  );
};
export default Column;
