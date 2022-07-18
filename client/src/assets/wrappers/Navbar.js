import styled from 'styled-components';

const Wrapper = styled.nav`
  height: 97px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: var(--border);

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
      width: 90%;
    }
  }
`;

export default Wrapper;
