import Wrapper from '../assets/wrappers/Dashboard';
import Button from './Button';

import { useAppContext } from '../provider/appProvider';
import Board from './Board';
import { useParams } from 'react-router-dom';
import InitialMessage from './InitialMessage';

const Dashboard = () => {
  const { selectedBoard } = useAppContext();
  return (
    <Wrapper>
      <div className='dashboard-container'>
        {selectedBoard ? <Board /> : <InitialMessage />}
      </div>
    </Wrapper>
  );
};
export default Dashboard;
