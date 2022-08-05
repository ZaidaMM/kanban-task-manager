import styled from 'styled-components';

const Wrapper = styled.main`
  .main {
    background-color: var(--grey-100);
    height: 100vh;
    width: 100vw;
    margin-left: 297px;
  }

  .expanded {
    margin-left: 0;
    z-index: 30;
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

  @media (max-width: 768px) {
    .main {
      margin-left: 0;
      z-index: 30;
    }
  }
`;

export default Wrapper;
