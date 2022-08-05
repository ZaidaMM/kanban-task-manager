// import Wrapper from '../assets/wrappers/TaskContainer';
import { ITasksData } from '../interfaces/IBoardsData';
import { useAppContext } from '../provider/appProvider';

const Task = ({
  customClass,
  title,
  status,
  completedSubtasks,
  totalSubtasks,
}: ITasksData) => {
  // const { tasks } = useAppContext();
  return (
    // <Wrapper>
    <div className='task-container'>
      <p className={customClass}>{title}</p>
      <span>
        {completedSubtasks} of {totalSubtasks} subtasks
      </span>
      {/* <p className={customClass}>{title}</p>
        <p>
          {subtask?.isCompleted} of {subtask?.totalSubtasks}{' '}
          {subtask?.subtaskTitle}
        </p> */}
    </div>
    // </Wrapper>
  );
};
export default Task;
