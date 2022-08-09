import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  align-items: start;
  justify-content: start;
  .column-container {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    margin-right: 24px;
    padding-bottom: 24px;
    width: 280px;
  }
  .column-name {
    display: flex;
    flex-direction: row;
    justify-content: left;
    text-align: center;
    flex-wrap: nowrap;
    padding-bottom: 24px;

    .todo {
      background-color: #49c4e5;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      align-items: center;
    }
    .doing {
      background-color: #8471f2;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      align-items: center;
    }
    .done {
      background-color: #67e2ae;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      align-items: center;
    }
    .column-title {
      text-transform: uppercase;
      color: var(--grey-300);
      font-weight: 700;
      letter-spacing: 2.4px;
      font-size: 12px;
      padding-left: 12px;
    }
  }
`;

export default Wrapper;
