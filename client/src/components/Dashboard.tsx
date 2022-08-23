import Wrapper from '../assets/wrappers/Dashboard';
import { useAppContext } from '../provider/appProvider';
import Board from './Board';

const Dashboard = () => {
  const { selectedBoard } = useAppContext();
  return (
    <Wrapper>
      <div className='dashboard-container'>
        <Board />
      </div>
    </Wrapper>
  );
};
export default Dashboard;
