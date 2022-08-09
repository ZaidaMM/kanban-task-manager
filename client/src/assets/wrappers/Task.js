import styled from 'styled-components';

const Wrapper = styled.section`
  .task-container {
    background: var(--white);
    border-radius: 8px;
    padding: 23px 16px;
    margin-bottom: 20px;
    /* margin-right: 24px; */

    width: 280px;
  }
  p {
    font-weight: 700;
    font-size: 15px;
  }
  span {
    color: var(--grey-300);
    font-weight: 700;
    font-size: 12px;
  }
`;

export default Wrapper;
