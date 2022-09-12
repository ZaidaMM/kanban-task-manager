import Wrapper from '../assets/wrappers/Task';
import { ITasksData } from '../interfaces/IBoardsData';
import { useAppContext } from '../provider/appProvider';
import { boards } from '../utils/boards';

const Task = ({
  customClass,
  title,
  status,
  completedSubtasks,
  totalSubtasks,
  subtasks,
  _id,
}: ITasksData) => {
  const { boards, column, columns, task, tasks, selectedBoard } =
    useAppContext();
  return (
    <Wrapper>
      <div className='task-container'>
        <p className={customClass} key={_id}>
          {title}
        </p>
        <span>
          {completedSubtasks} of {totalSubtasks} subtasks
        </span>

        <p className={customClass}>
          Research competitor pricing and business models
        </p>

        {/* <p>
          {subtask?.isCompleted} of {subtask?.totalSubtasks}{' '}
          {subtask?.subtaskTitle}
        </p> */}
      </div>
    </Wrapper>
  );
};
export default Task;
