import styled from 'styled-components';

const Wrapper = styled.nav`
  z-index: 10;
  height: 97px;
  width: 100vw;
  border-bottom: var(--border);
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 25px;
  margin-left: 297px;
  .expanded {
    margin-left: 0;
  }

  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-buttons {
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export default Wrapper;
