import styled from 'styled-components';

const Wrapper = styled.div`
  .delete-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    /* z-index: 100 !important; */
    height: 100vh;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.5);
  }

  .delete-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 229px;
    width: 482px;
    margin-left: -220px;
    margin-top: -97px;
    padding: 32px 32px 40px 32px;
    background-color: var(--white);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }
  .modal-title {
    font-size: 18px;
    color: var(--red-dark);
  }
  .delete-modal p {
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: 13px;
    color: var(--grey-300);
  }
  .buttons-container-row {
    display: flex;
    flex-direction: row;
  }
  .btn-modal {
    padding: 8px 77px;
  }
  .btn-modal.btn-danger {
    margin-right: 16px;
  }
`;
export default Wrapper;
