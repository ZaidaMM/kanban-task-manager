import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  /* z-index: 0; */
  background-color: var(--white);
  width: 100vw;
  position: fixed;
  .logo {
    padding-left: 16px;
    padding-right: 55px;
    border-right: var(--border);
    border-bottom: var(--border);
  }
  .logo-expanded {
    margin-top: 33px;
    margin-right: -24px;
    z-index: 20;
  }
  .nav-center {
    border-bottom: var(--border);
    border-left: var(--border);
    width: 100vw;
    height: 97px;
    padding-right: 33px;
    padding-left: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-center-expanded {
    border-bottom: var(--border);
    border-left: none;
    width: 100vw;
    height: 97px;
    padding-right: 33px;
    padding-left: 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 0;
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
    .logo {
      padding-top: 18px;
      padding-right: 14px;
      border-right: none;
    }
    .nav-center {
      margin-left: 0;
      z-index: 30;
    }
  }
`;

export default Wrapper;
