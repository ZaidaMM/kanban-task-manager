import styled from 'styled-components';

const Wrapper = styled.nav`
  z-index: 100;
  height: 97px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: var(--border);
  background: var(--white);
  position: sticky;
  top: 0;
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-buttons {
    display: flex;
    align-items: center;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .nav-center {
      width: 90%;
      /* max-width: 80%; */
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 32px;
    }
  }
  @media (min-width: 992px) {
    .nav-center {
      width: 80%;
      max-width: 90%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 32px;
    }
  }
`;

export default Wrapper;
