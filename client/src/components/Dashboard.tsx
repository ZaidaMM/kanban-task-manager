import Wrapper from '../assets/wrappers/Dashboard';
import Button from './Button';

const Dashboard = () => {
  return (
    <Wrapper>
      <div className='dashboard-container'>
        <p className='dashboard-message'>
          This board is empty. Create a new column to get started.
        </p>
      </div>
      <Button
        children='Add New Column'
        onClick={() => console.log('Add new column')}
      />
    </Wrapper>
  );
};
export default Dashboard;
