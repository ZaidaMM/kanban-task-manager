import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  z-index: 10;
  background-color: var(--white);
  width: 100vw;
  position: fixed;

  .nav-center {
    border-bottom: var(--border);
    width: 100vw;
    height: 97px;
    padding-right: 33px;
    padding-left: 24px;
    margin-left: 297px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .expanded {
    margin-left: 0;
    z-index: 30;
  }
  .nav-buttons {
    display: flex;
    align-items: center;
  }
  .dropdown {
    width: 192px;
    height: 94px;
    border-radius: 8px;
    position: absolute;
    top: 90px;
    right: 24px;
    padding: 16px;
    text-align: center;
    visibility: hidden;
    background-color: var(--white);

    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    font-size: 13px;
    line-height: 23px;
    cursor: pointer;
  }
  span.danger {
    color: var(--red-dark);
    padding-top: 16px;
  }
  span.grey {
    color: var(--grey-300);
  }
  .show-dropdown {
    visibility: visible;
  }
  @media (max-width: 768px) {
    .nav-center {
      margin-left: 0;
      z-index: 30;
    }
  }
`;

export default Wrapper;
