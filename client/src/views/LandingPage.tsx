// import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Wrapper from '../assets/wrappers/Landing';

const LandingPage = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <Sidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            {/* <Outlet /> */}
            <h4>BOARD</h4>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default LandingPage;
