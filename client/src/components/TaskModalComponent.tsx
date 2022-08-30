import { useAppContext } from '../provider/appProvider';

interface showTaskModalProps {
  showTaskModal?: boolean;
  setShowTaskModal?: (value: boolean) => void;
}

const TaskModalComponent = ({ showTaskModal }: showTaskModalProps) => {
  const { openBoardModal } = useAppContext();

  return (
    <div>
      {showTaskModal ? (
        <>
          <div>
            <h1>TaskModalComponent</h1>{' '}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default TaskModalComponent;
