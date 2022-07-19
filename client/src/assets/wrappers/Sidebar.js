import styled from 'styled-components';

const Wrapper = styled.aside`
  box-shadow: 2px 0px 0px 0px rgba(0, 0, 0, 0.1);
  /* border-right: var(--border); */
  display: none;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .sidebar-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 300px;
      min-height: 100vh;
      height: 100%;
      margin-left: -650px;
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
    }
    .nav-link.active .icon {
      filter: saturate(0%) brightness(0%) invert(100%) opacity(1);
    } */
    .nav-link:hover {
      background: var(--primary-50);
      color: var(--primary-200);
    }
    .nav-link:hover .icon {
      filter: invert(39%) sepia(80%) saturate(854%) hue-rotate(213deg)
        brightness(83%) contrast(86%);
    }
    .nav-link .icon svg {
      height: 16px;
      width: 16px;
      margin-right: 16px;
    }
    .nav-link.create-board {
      color: var(--primary-200);
      cursor: pointer;
    }
    .nav-link.create-board .icon {
      filter: invert(39%) sepia(80%) saturate(854%) hue-rotate(213deg)
        brightness(83%) contrast(86%);
    }
    .toggler.container {
      display: flex;
      flex-direction: column;
    }
    .sidebar-toggler {
      position: relative;
      bottom: 82px;
      left: -34px;
      display: flex;
      flex-direction: row;
      align-items: center;
      color: var(--grey-300);
      font-size: 15px;
      font-weight: 700;
      padding-left: 34px;
      cursor: pointer;
    }
    .show-sidebar-toggler {
      left: 0;
      margin-bottom: 47px;
    }
    .hide-sidebar-icon {
      margin-right: 10px;
    }
    .show-sidebar-icon {
      visibility: hidden;
      background: var(--primary-200);
      border-radius: 0 50px 50px 0;
      width: 56px;
      height: 48px;
      transition: var(--transition);
      display: inline-block;
      cursor: pointer;
    }
  }
`;

export default Wrapper;
