import styled from 'styled-components';

const Wrapper = styled.section`
  .columns-container {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    height: 100%;
  }
  .message-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .dashboard-message {
    color: var(--grey-300);
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 32px;
  }
  .create-new-column {
    background-color: var(--grey-200);
    color: var(--grey-300);
    font-weight: 700;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 280px;
    height: 70vh;
    margin-top: 63px;
    margin-bottom: 50px;
    margin-left: 24px;
    border-radius: 6px;
  }
`;
export default Wrapper;
