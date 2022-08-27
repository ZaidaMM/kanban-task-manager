import { useAppContext } from '../provider/appProvider';
import Button from './Button';

const InitialMessage = () => {
  const { showSidebar } = useAppContext();
  return (
    <div
      className={
        showSidebar ? 'message-container ' : 'message-container-expanded'
      }
    >
      <p className='initial-message'>
        This board is empty. Create a new Column to get started.
      </p>
      <Button
        children='+ Add New Column'
        onClick={() => console.log('Add new column')}
        customClass='btn'
      />
    </div>
  );
};

export default InitialMessage;
