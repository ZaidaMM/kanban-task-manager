import styled from 'styled-components';

const Wrapper = styled.aside`
  border-right: var(--border);
  /* display: none; */

  @media (min-width: 992px) {
    .sidebar-container {
      display: block;
      width: 300px;
      min-height: 100vh;
      height: 100%;
      /* margin-left: -250px; */
      transition: var(--transition);
    }
    .content {
      position: sticky;
      top: 32px;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      padding-left: 34px;
    }
    .sidebar-title {
      text-transform: uppercase;
      color: var(--grey-300);
      font-weight: 700;
      letter-spacing: 2.4px;
      padding-top: 70px;
      font-size: 12px;
      padding-bottom: 19px;
      padding-left: 34px;
    }
    .nav-links {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    }

    .nav-link {
      display: flex;
      align-items: center;
      background: var(--white);
      color: var(--grey-300);
      border-radius: 0 50px 50px 0;
      width: 276px;
      padding-left: 34px;
      padding-top: 14px;
      padding-bottom: 15px;
      font-size: 15px;
      font-weight: 700;
    }
    /* .nav-link.active {
      background: var(--primary-200);
      color: var(--white);
    } */
    .nav-link:hover {
      background: var(--primary-50);
      color: var(--primary-200);
    }
    .nav-link .icon {
      height: 16px;
      width: 16px;
      margin-right: 16px;
    }
    .nav-link.create-board {
      color: var(--primary-200);
      cursor: pointer;
    }
  }
`;

export default Wrapper;
