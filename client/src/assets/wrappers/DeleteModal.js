import styled from 'styled-components';

const Wrapper = styled.div`
  .delete-modal-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: -24px;
    margin-left: -15px;
    z-index: 100;
    height: 100vh;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .delete-modal {
    display: flex;
    flex-direction: column;
    /* justify-content: left; */
    margin-left: 297px;
    height: 229px;
    width: 482px;
    background-color: var(--white);
    border-radius: 6px;
    padding: 32px 32px 40px 32px;
  }
  .modal-title {
    font-size: 18px;
    color: var(--red-dark);
    text-align: left;
  }
  .delete-modal p {
    display: flex;
    text-align: left;
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: 13px;
    color: var(--grey-300);
  }
  .buttons-container-row {
    display: flex;
    flex-direction: row;
    /* margin-bottom: 8px; */
    /* margin-top: 12px; */
  }
  .btn-modal {
    padding: 8px 77px;
    /* margin-bottom: 24px; */
  }
  .btn-modal.btn-danger {
    margin-right: 16px;
  }
`;
export default Wrapper;
