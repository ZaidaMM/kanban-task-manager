import styled from 'styled-components';

const Wrapper = styled.nav`
  z-index: 100;
  height: 97px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  border-bottom: var(--border);
  background: var(--white);
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-buttons {
    display: flex;
    align-items: center;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 80%;
      margin-left: 32px;
    }
  }
`;

export default Wrapper;
