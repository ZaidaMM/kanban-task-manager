import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  z-index: 10;
  background-color: var(--white);
  width: 100vw;
  position: fixed;

  .nav-center {
    border-bottom: var(--border);
    width: 100vw;
    height: 97px;
    padding-right: 33px;
    padding-left: 24px;
    margin-left: 297px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .expanded {
    margin-left: 0;
    z-index: 30;
  }

  .nav-buttons {
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    .nav-center {
      margin-left: 0;
      z-index: 30;
    }
  }
`;

export default Wrapper;
