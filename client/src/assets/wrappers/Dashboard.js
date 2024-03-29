import styled from 'styled-components';

const Wrapper = styled.section`
  .dashboard-container {
    margin-left: 297px;
    display: flex;
    z-index: 100;
  }
  .message-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100vw;
    margin-top: 97px;
    margin-left: -474px;
  }
  .message-container-expanded {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100vw;
    margin-top: 97px;
    margin-left: -297px;
  }
  .initial-message {
    color: var(--grey-300);
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 32px;
    margin-top: 97px;
  }
  @media (max-width: 768px) {
    .message-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      left: 22%;
      margin-left: 0;
    }
    .initial-message {
      text-align: center;
      flex-wrap: wrap;
      max-width: 343px;
    }
  }
  @media (min-width: 769px) and (max-width: 991px) {
    .message-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      left: 48%;
    }
    .initial-message {
      text-align: center;
      flex-wrap: wrap;
      max-width: 343px;
    }
  }
`;

export default Wrapper;
