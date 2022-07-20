import styled from 'styled-components';

const Wrapper = styled.main`
  background-color: var(--grey-100);
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .dashboard-container {
    display: flex;
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
