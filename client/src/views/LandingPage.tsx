import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const LandingPage = () => {
  return (
    <div className='flex justify-between'>
      <Sidebar />
      <div>
        <Navbar />

        <h4 className='mt-6'>BOARD</h4>
      </div>
    </div>
  );
};
export default LandingPage;
