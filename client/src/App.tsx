import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Board from './components/Board';
import LandingPage from './views/LandingPage';
import NewBoard from './views/NewBoard';
import NewColumn from './views/NewColumn';
import NewTask from './views/NewTask';
import Task from './views/Task';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/:id' element={<LandingPage />} />

          <Route path='/new-board' element={<NewBoard />} />
          <Route path='/new-column' element={<NewColumn />} />
          <Route path='/new-task' element={<NewTask />} />
          <Route path='/task/:taskId' element={<Task />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
