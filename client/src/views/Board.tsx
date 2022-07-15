import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Board = () => {
  return (
    <main className='flex'>
      <Sidebar />
      <div className='flex-col'>
        <Navbar />

        <h4>LandingPage</h4>
      </div>
    </main>
  );
};
export default Board;
