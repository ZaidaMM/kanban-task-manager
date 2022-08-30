import styled from 'styled-components';

const Wrapper = styled.div`
  .modal-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    height: 100vh;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.5);
  }
  .expanded {
    /* margin-left: 645px; */
  }
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    /* min-height: 429px; */
    width: 480px;
    margin-left: -265px;
    margin-top: -265px;
    padding: 32px;
    background-color: var(--white);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: left;
  }
  .form-title {
    font-size: 18px;
  }

  .form-group {
    margin-top: 24px;
  }
  .form-input-edit {
    display: flex;
    flex-direction: column;
  }
  .form-label {
    font-size: 12px;
    font-weight: 700;
    color: var(--grey-300);
    line-height: 8px;
  }
  .form-input {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .form-control {
    display: block;
    align-items: left;
    font-size: 13px;
    padding-top: 9px;
    padding-bottom: 9px;
    padding-left: 16px;
    border-radius: 4px;
    margin-top: 9px;

    width: 100%;
    border: 1px solid var(--grey-200);
  }
  .form-icon {
    padding-top: 9px;
    margin-left: 16px;
  }
  .buttons-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    margin-top: 12px;
  }
  .btn-light {
    margin-top: 12px;
  }
  .btn-dark {
    margin-top: 24px;
  }
`;
export default Wrapper;
