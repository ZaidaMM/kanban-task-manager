import { useAppContext } from '../provider/appProvider';
import Wrapper from '../assets/wrappers/DeleteModal';
import Button from './Button';

interface showDeleteBoardModalProps {
  setShowDeleteBoard: (value: boolean) => void;
  showDeleteBoard: boolean;
  // onClick: (value: boolean) => void;
}

const DeleteModalComponent = ({
  showDeleteBoard,
}: showDeleteBoardModalProps) => {
  const { openDeleteBoardModal } = useAppContext();
  return (
    <Wrapper>
      <>
        {showDeleteBoard ? (
          <>
            <div className='delete-modal-wrapper'>
              <div className='delete-modal'>
                <h3 className='modal-title'>Delete this board?</h3>
                <p>
                  Are you sure you want to delete the ‘Platform Launch’ board?
                  This action will remove all columns and tasks and cannot be
                  reversed.
                </p>
                <div className='buttons-containers-row'>
                  <Button
                    children={'Delete'}
                    customClass='btn btn-modal btn-danger'
                    onClick={() => {
                      return console.log('delete board');
                    }}
                  />
                  <Button
                    children={'Cancel'}
                    customClass='btn btn-modal btn-light'
                    onClick={() => openDeleteBoardModal()}
                  />
                </div>
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
export default DeleteModalComponent;
