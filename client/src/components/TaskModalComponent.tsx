import Wrapper from '../assets/wrappers/TaskModal';
import { useAppContext } from '../provider/appProvider';
import { ReactComponent as Icon } from '../assets/images/icon-cross.svg';
import Button from './Button';
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react';

interface showTaskModalProps {
  showTaskModal?: boolean;
  setShowTaskModal?: (value: boolean) => void;
}

const TaskModalComponent = ({ showTaskModal }: showTaskModalProps) => {
  const { openTaskModal, showSidebar, selectedBoard, columns, column } =
    useAppContext();

  return (
    <Wrapper>
      {showTaskModal ? (
        <>
          <div
            onClick={() => openTaskModal()}
            className={showSidebar ? 'modal-wrapper' : 'modal-wrapper expanded'}
          >
            <form className='form' onClick={(e) => e.stopPropagation()}>
              <h3>Add New Task</h3>
              <div className='form-group'>
                <label htmlFor='title' className='form-label'>
                  Title
                </label>
                <div className='form-input'>
                  <input
                    type='text'
                    className='form-control'
                    id='title'
                    name='title'
                    value=''
                    placeholder='e.g. Take coffee break'
                  />
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='description' className='form-label'>
                  Description
                </label>
                <div className='form-input'>
                  <textarea
                    className='form-control'
                    id='description'
                    name='description'
                    value=''
                    placeholder='e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'
                  ></textarea>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='subtasks' className='form-label'>
                  Subtasks
                </label>
                <div className='form-input'>
                  <input
                    type='text'
                    className='form-control'
                    id='subtasks'
                    name='subtasks'
                    value=''
                    placeholder='e.g. Make coffee'
                  />
                  <span className='form-icon'>
                    <Icon />
                  </span>
                </div>
                <div className='form-input'>
                  <input
                    type='text'
                    className='form-control'
                    id='subtasks'
                    name='subtasks'
                    value=''
                    placeholder='e.g. Drink coffee and smile'
                  />
                  <span className='form-icon'>
                    <Icon />
                  </span>
                </div>
              </div>
              <Button
                children={'+ Add New Subtask'}
                customClass='btn btn-modal btn-light'
                onClick={() => {
                  return console.log('add subtask');
                }}
              />
              <div className='form-group'>
                <label htmlFor='status' className='form-label'>
                  Status
                </label>
                <div className='form-input'>
                  <select
                    className='form-control'
                    id='status'
                    name='status'
                    value='Todo'
                    placeholder='e.g. Take coffee break'
                  >
                    {selectedBoard?.columns?.map((column) => {
                      return (
                        <option value='{column.name}'>{column.name}</option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <Button
                children={'Create New Task'}
                customClass='btn btn-modal btn-dark'
                onClick={() => console.log('create task')}
              />
            </form>
          </div>
        </>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};
export default TaskModalComponent;
