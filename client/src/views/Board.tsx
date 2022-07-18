import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Board = () => {
  return (
    <div className='flex justify-between'>
      <Sidebar />
      <div>
        <Navbar />

        <h4 className='mt-6'>LandingPage</h4>
      </div>
    </div>
  );
};
export default Board;
