// import Wrapper from '../assets/wrappers/BoardContainer';
import { useAppContext } from '../provider/appProvider';
import Column from './Column';
import { IBoardsData, IColumnsData } from '../interfaces/IBoardsData';
import Button from './Button';
// import { boards } from '../utils/boards';
import { Message } from './InitialMessage';
import Task from './Task';
import { boards } from '../utils/boards';

const Board = () => {
  const { columns, selectedBoard } = useAppContext();

  return (
    // <Wrapper>
    <div
      className={
        !selectedBoard ? 'board-container centered' : 'board-container'
      }
    >
      {!selectedBoard ? (
        <>
          {' '}
          <Message />
        </>
      ) : (
        <>
          {/* {selectedBoard.columns?.map((col) => {
              return (
                <div>
                  <h1>{col.name}</h1>{' '}
                  <p>
                    {col.quantity}, board id: {selectedBoard._id}
                  </p>
                </div>
              );
            })} */}

          {/* {columns?.map((column) => (
              <Column
                key={column._id}
                name={column.name}
                _id={column._id}
                tasks={[]}
                customClass={`column-dot`}
                quantity={columns.length}
              />
            ))} */}
          <div className='columns-container'>
            <div className='column'>
              <Column
                key={1}
                name={'TODO'}
                _id={'1'}
                customClass={'column-dot blue'}
                quantity={4}
              />
              <div className='tasks-container'>
                <Task
                  key={1}
                  title={'Build UI for onboarding flow'}
                  description={''}
                  status={'Todo'}
                  customClass={'task'}
                  completedSubtasks={0}
                  totalSubtasks={3}
                />
                <Task
                  key={2}
                  title={'Build UI for search'}
                  description={''}
                  status={'Todo'}
                  customClass={'task'}
                  completedSubtasks={0}
                  totalSubtasks={1}
                />
                <Task
                  key={3}
                  title={'Build settings UI'}
                  description={''}
                  status={'Todo'}
                  customClass={'task'}
                  completedSubtasks={0}
                  totalSubtasks={2}
                />
                <Task
                  key={4}
                  title={'QA and test all major user journeys'}
                  description={
                    'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.'
                  }
                  status={'Todo'}
                  customClass={'task'}
                  completedSubtasks={0}
                  totalSubtasks={2}
                />
              </div>
            </div>
            <div className='column'>
              <Column
                key={2}
                name={'DOING'}
                _id={2}
                customClass={'column-dot purple'}
                quantity={6}
              />
              <div className='tasks-container'>
                <Task
                  key={1}
                  title={'Design settings and search pages'}
                  description={''}
                  status={'Doing'}
                  customClass={'task'}
                  completedSubtasks={2}
                  totalSubtasks={3}
                />
                <Task
                  key={2}
                  title={'Add account management endpoints'}
                  description={''}
                  status={'Doing'}
                  customClass={'task'}
                  completedSubtasks={2}
                  totalSubtasks={3}
                />
                <Task
                  key={3}
                  title={'Design onboarding flow'}
                  description={''}
                  status={'Doing'}
                  customClass={'task'}
                  completedSubtasks={1}
                  totalSubtasks={3}
                />
                <Task
                  key={4}
                  title={'Add search enpoints'}
                  description={''}
                  status={'Doing'}
                  customClass={'task'}
                  completedSubtasks={1}
                  totalSubtasks={2}
                />
                <Task
                  key={5}
                  title={'Add authentication endpoints'}
                  description={''}
                  status={'Doing'}
                  customClass={'task'}
                  completedSubtasks={1}
                  totalSubtasks={2}
                />
                <Task
                  key={6}
                  title={
                    'Research pricing points of various competitors and trial different business models'
                  }
                  description={
                    "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition."
                  }
                  status={'Doing'}
                  customClass={'task'}
                  completedSubtasks={1}
                  totalSubtasks={3}
                />
              </div>
            </div>
            <div className='column'>
              <Column
                key={3}
                name={'DONE'}
                _id={3}
                customClass={'column-dot green'}
                quantity={7}
              />
              <div className='tasks-container'>
                <Task
                  key={1}
                  title={'Conduct 5 wireframe tests'}
                  description={
                    'Ensure the layout continues to make sense and we have strong buy-in from potential users.'
                  }
                  status={'DONE'}
                  customClass={'task'}
                  completedSubtasks={1}
                  totalSubtasks={1}
                />
                <Task
                  key={2}
                  title={'Create wireframe prototype'}
                  description={
                    'reate a greyscale clickable wireframe prototype to test our asssumptions so far.'
                  }
                  status={'DONE'}
                  customClass={'task'}
                  completedSubtasks={1}
                  totalSubtasks={1}
                />
                <Task
                  key={3}
                  title={'Review results of usability tests and iterate'}
                  description={
                    "Keep iterating through the subtasks until we're clear on the core concepts for the app."
                  }
                  status={'DONE'}
                  customClass={'task'}
                  completedSubtasks={3}
                  totalSubtasks={3}
                />
                <Task
                  key={4}
                  title={
                    'Create paper prototypes and conduct 10 usability tests with potential customers'
                  }
                  description={''}
                  status={'DONE'}
                  customClass={'task'}
                  completedSubtasks={1}
                  totalSubtasks={2}
                />
                <Task
                  key={5}
                  title={'Market discovery'}
                  description={
                    'We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.'
                  }
                  status={'DONE'}
                  customClass={'task'}
                  completedSubtasks={1}
                  totalSubtasks={1}
                />
                <Task
                  key={6}
                  title={'Competitor analysis'}
                  description={''}
                  status={'DONE'}
                  customClass={'task'}
                  completedSubtasks={2}
                  totalSubtasks={2}
                />
                <Task
                  key={7}
                  title={'Research the market'}
                  description={''}
                  status={'DONE'}
                  customClass={'task'}
                  completedSubtasks={2}
                  totalSubtasks={2}
                />
              </div>
            </div>
            <div className='create-new-column'>
              <p>+ New Column</p>
            </div>
          </div>
        </>
      )}
    </div>
    // </Wrapper>
  );
};
export default Board;
