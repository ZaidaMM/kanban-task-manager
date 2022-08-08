import styled from 'styled-components';

const Wrapper = styled.section`
  .board-container {
    display: flex;
    align-items: start;
    justify-content: start;
    margin-right: 0;
    margin-bottom: 0;
    overflow: visible;
    height: 100vh;
    margin-left: -297px;
  }

  .columns-container {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    min-height: 100vh;
    width: 100vw;
    margin-top: 24px;
    margin-left: 24px;
  }
  .create-new-column {
    background-color: var(--grey-200);
    color: var(--grey-300);
    font-weight: 700;
    /* font-size: 24px; */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 30px;
    min-width: 280px;
    height: 100vh;
    min-height: 100%;
    margin-top: 39px;
    margin-bottom: 50px;
    margin-left: 24px;
    border-radius: 6px;
  }
`;

export default Wrapper;
