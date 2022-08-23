import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wrapper from './assets/wrappers/Main';
import Board from './components/Board';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useAppContext } from './provider/appProvider';
import LandingPage from './views/LandingPage';
import NewBoard from './views/NewBoard';
import NewColumn from './views/NewColumn';
import NewTask from './views/NewTask';
import Task from './views/Task';

function App() {
  const { showSidebar } = useAppContext();
  return (
    <>
      <Router>
        <div className='layout'>
          <Sidebar />
          <Navbar />
        </div>
        <Wrapper>
          <div className={!showSidebar ? 'main expanded' : 'main'}>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/:id' element={<Board />} />

              <Route path='/new-board' element={<NewBoard />} />
              <Route path='/new-column' element={<NewColumn />} />
              <Route path='/new-task' element={<NewTask />} />
              <Route path='/task/:taskId' element={<Task />} />
            </Routes>
          </div>
        </Wrapper>
      </Router>
    </>
  );
}

export default App;
