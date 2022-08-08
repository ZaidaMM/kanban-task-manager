import Wrapper from '../assets/wrappers/Modal';
import { useAppContext } from '../provider/appProvider';
import Button from './Button';

interface showBoardModalProps {
  setShowBoardModal: (value: boolean) => void;
  showBoardModal: boolean;
}

const ModalComponent = ({ showBoardModal }: showBoardModalProps) => {
  const { openBoardModal } = useAppContext();

  return (
    <Wrapper>
      <>
        {showBoardModal ? (
          <>
            <div className='modal-wrapper'>
              <div className='form' /* onSubmit={onSubmit} */>
                <h2>Add New Board</h2>
                <div className='form-group'>
                  <label htmlFor='boardName' className='form-label'>
                    Board Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='boardName'
                    name='boardName'
                    value='boardName'
                    placeholder='e.g. Web Design' /* onChange={onChange} */
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='boardColumns' className='form-label'>
                    Board Columns
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='boardColumns'
                    name='boardNColumns'
                    value='boardColumns'
                    placeholder='e.g. Web Design' /* onChange={onChange} */
                  />
                </div>
                <Button
                  onClick={function (): void {
                    throw new Error('Function not implemented.');
                  }}
                />
                <Button
                  onClick={function (): void {
                    throw new Error('Function not implemented.');
                  }}
                />
              </div>
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
