// import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
// import Wrapper from '../assets/wrappers/Landing';
import Dashboard from '../components/Dashboard';
import { Outlet } from 'react-router-dom';

const LandingPage = () => {
  return (
    // <Wrapper>
    <main className='dashboard'>
      {/* <Sidebar /> */}
      <div>
        {/* <Navbar /> */}
        <div className='dashboard-page'>
          {/* <Outlet /> */}
          <Dashboard />
        </div>
      </div>
    </main>
    // </Wrapper>
  );
};
export default LandingPage;
