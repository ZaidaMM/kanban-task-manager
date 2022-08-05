import Wrapper from '../assets/wrappers/Dashboard';
import Button from './Button';

import { useAppContext } from '../provider/appProvider';
import Board from './Board';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const params = useParams();
  const { boardId } = useParams();
  return (
    <Wrapper>
      <div className='dashboard-container'>{/* <Board /> */}</div>
    </Wrapper>
  );
};
export default Dashboard;
