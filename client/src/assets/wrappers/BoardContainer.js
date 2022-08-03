import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  .board-container {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
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
`;
export default Wrapper;
