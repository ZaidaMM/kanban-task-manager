import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import NewBoard from './views/NewBoard';
import NewTask from './views/NewTask';
import Task from './views/Task';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/new-board' element={<NewBoard />} />
          <Route path='/new-task' element={<NewTask />} />
          <Route path='/task/:taskId' element={<Task />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
