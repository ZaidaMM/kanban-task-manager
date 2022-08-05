import styled from 'styled-components';

const Wrapper = styled.main`
  .main {
    background-color: var(--grey-200);
    height: 100vh;
    width: 100vw;
    margin-left: 297px;
  }

  .expanded {
    margin-left: 0;
    z-index: 30;
  }

  @media (max-width: 768px) {
    .main {
      margin-left: 0;
      z-index: 30;
    }
  }
`;

export default Wrapper;
