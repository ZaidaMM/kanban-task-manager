import styled from 'styled-components';

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
    z-index: 0;
    margin-top: -24px;
  }
  .dashboard-page {
    width: 90vw;
    height: 100%;
    margin: 0 auto;
    /* padding: 2rem 0; */
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 100%;
    }
  }
`;

export default Wrapper;
