import Wrapper from '../assets/wrappers/Modal';
import { useAppContext } from '../provider/appProvider';
import Button from './Button';
import { MouseEvent, useState, useEffect } from 'react';
import { ReactComponent as Icon } from '../assets/images/icon-cross.svg';
import React from 'react';

interface showBoardModalProps {
  setShowBoardModal: (value: boolean) => void;
  showBoardModal: boolean;
  onClick: (value: boolean) => void;
}

const ModalComponent = ({ showBoardModal }: showBoardModalProps) => {
  const { openBoardModal, createBoard, handleSubmit, board, column, columns } =
    useAppContext();
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('');
  // const [column, setColumn] = useState('');

  const myRef = React.useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <>
        {showBoardModal ? (
          <>
            <div
              ref={myRef}
              className='modal-wrapper'
              onClick={() => {
                openBoardModal();
              }}
            >
              <form
                className='form'
                onSubmit={(event) => handleSubmit(event)}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <h3 className='form-title'>
                  Add New Board
                  {/* {isEditing ? 'Edit Board' : 'Add New Board'} */}
                </h3>
                <div className='form-group'>
                  <label htmlFor='boardName' className='form-label'>
                    Name
                    {/* {isEditing ? 'Board Name' : 'Name'} */}
                  </label>
                  <div className='form-input'>
                    <input
                      type='text'
                      className='form-control'
                      id='boardName'
                      name='boardName'
                      value={board?.name}
                      placeholder='e.g. Web Design'
                      onChange={(event: { target: { value: string } }) => {
                        setName(event.target.value);
                        console.log(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='boardColumns' className='form-label'>
                    Columns
                    {/* {isEditing ? 'Board Columns' : 'Columns'} */}
                  </label>
                  <div className='form-input'>
                    <input
                      type='text'
                      className='form-control'
                      id='boardColumn'
                      name='boardColumn'
                      value='Todo'
                      placeholder='e.g. Web Design'
                      onChange={(event: { target: { value: string } }) => {
                        void (
                          // setColumn(event.target.value);
                          console.log('column')
                        );
                      }}
                    />
                    <span className='form-icon'>
                      <Icon />
                    </span>
                  </div>
                </div>

                <div className='form-input'>
                  <input
                    type='text'
                    className='form-control'
                    id='boardColumn'
                    name='boardColumn'
                    value='Doing'
                    placeholder='e.g. Web Design'
                    onChange={(event: { target: { value: string } }) => {
                      void (
                        // setColumn(event.target.value);
                        console.log('column')
                      );
                    }}
                  />
                  <span className='form-icon'>
                    <Icon />
                  </span>
                </div>
                <div className='buttons-container'>
                  <Button
                    children={'+ Add New Column'}
                    customClass='btn btn-modal btn-light'
                    onClick={() => {
                      return console.log(column);
                    }}
                  />
                  <Button
                    children={'Create New Board'}
                    customClass='btn btn-modal'
                    onClick={() => createBoard()}
                  />
                </div>
              </form>
            </div>
          </>
        ) : (
          <></>
        )}
      </>
    </Wrapper>
  );
};
export default ModalComponent;
function handleChange(arg0: { name: any; value: any }) {
  throw new Error('Function not implemented.');
}
function setInputName(name: any) {
  throw new Error('Function not implemented.');
}
function handleSubmit(name: any) {
  throw new Error('Function not implemented.');
}
function setShowBoardModal(arg0: boolean) {
  throw new Error('Function not implemented.');
}
