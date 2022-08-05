import styled from 'styled-components';

const Wrapper = styled.nav`
  z-index: 10;
  height: 97px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: var(--border);
  background: var(--white);
  position: absolute;
  right: 0;
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-buttons {
    display: flex;
    align-items: center;
  }
`;

export default Wrapper;
