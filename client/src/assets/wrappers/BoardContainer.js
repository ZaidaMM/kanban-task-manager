import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  align-items: start;
  justify-content: start;
  .board-container {
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
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
  }
`;
export default Wrapper;
