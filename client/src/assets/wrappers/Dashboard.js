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

  .show-icon-container {
    background: var(--primary-200);
    border-radius: 0 50px 50px 0;
    width: 56px;
    height: 48px;
    transition: var(--transition);
    position: absolute;
    left: 0;
    bottom: 32px;
    cursor: pointer;
  }
  .hide-icon-container {
    visibility: hidden;
  }
  .show-sidebar-icon {
    cursor: pointer;
    position: absolute;
    left: 16px;
    bottom: 18px;
  }
`;
export default Wrapper;
