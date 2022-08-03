import styled from 'styled-components';

const Wrapper = styled.section`
  /* display: flex;

  align-items: start;
  justify-content: start; */
  .column-container {
    display: grid;
    grid-template-columns: 1fr;
    padding-left: 24px;
    padding-top: 24px;
    width: 280px;
  }
  .column-name {
    display: flex;
    flex-direction: row;
    justify-content: left;
    text-align: center;
    flex-wrap: nowrap;
    height: 15px;
    padding-bottom: 24px;
  }
  .column-dot {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    align-items: center;
  }
  .blue {
    background-color: #49c4e5;
  }
  .purple {
    background-color: #8471f2;
  }
  .green {
    background-color: #67e2ae;
  }
  .column-title {
    height: 15px;
    text-transform: uppercase;
    color: var(--grey-300);
    font-weight: 700;
    letter-spacing: 2.4px;
    font-size: 12px;
    padding-left: 12px;
  }
`;

export default Wrapper;
