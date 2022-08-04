import Button from './Button';

export const Message = () => {
  return (
    <div className='message-container centered'>
      <p className='dashboard-message'>
        This board is empty. Create a new Column to get started.
      </p>
      <Button
        children='+ Add New Column'
        onClick={() => console.log('Add new column')}
      />
    </div>
  );
};
