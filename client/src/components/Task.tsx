import Wrapper from '../assets/wrappers/TaskContainer';
import { useAppContext } from '../provider/appProvider';

const Task = () => {
  // const { tasks } = useAppContext();
  return (
    <Wrapper>
      <div className='task-container'>
        {/* <p className={customClass}>{title}</p>
        <p>
          {subtask?.isCompleted} of {subtask?.totalSubtasks}{' '}
          {subtask?.subtaskTitle}
        </p> */}
      </div>
    </Wrapper>
  );
};
export default Task;
