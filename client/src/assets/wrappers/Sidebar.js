import styled from 'styled-components';

const Wrapper = styled.aside`
  border-right: var(--border);
  display: none;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .sidebar-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 260px;
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
      width: 240px;
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
      display: flex;
      flex-direction: row;
      align-items: center;
      color: var(--grey-300);
      font-size: 15px;
      font-weight: 700;
      padding-left: 34px;
      margin-bottom: 47px;
      cursor: pointer;
    }
    .show-sidebar-toggler {
      left: 0;
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
    .mode-toggler-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 13px;
      margin-bottom: 30px;
      border-radius: 6px;
      width: 235px;
      height: 48px;
      background: var(--grey-100);
    }
    .mode-icon {
      height: 15px;
    }

    .switch-toggle {
      display: flex;
      margin-left: 23px;
      margin-right: 23px;
      align-items: center;
    }
    .switch-btn,
    .layer {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    .button-check {
      position: relative;
      width: 40px;
      height: 20px;
      overflow: hidden;
      border-radius: 50px;
      -webkit-border-radius: 50px;
      -moz-border-radius: 50px;
      -ms-border-radius: 50px;
      -o-border-radius: 50px;
    }
    .checkbox {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      opacity: 0;
      cursor: pointer;
      z-index: 3;
    }

    .switch-btn {
      z-index: 2;
    }

    .layer {
      width: 100%;
      background-color: var(--primary-200);
      transition: 0.3s ease all;
      z-index: 1;
    }
    #button-check .switch-btn:before,
    #button-check .switch-btn:after {
      position: absolute;
      top: 3px;
      left: 4px;
      width: 14px;
      height: 14px;
      font-weight: bold;
      text-align: center;
      background-color: var(--white);
      border-radius: 50%;
      /* transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all; */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #button-check .switch-btn:before {
      content: '';
    }

    #button-check .switch-btn:after {
      content: '';
    }

    #button-check .switch-btn:after {
      right: -50px;
      left: auto;
      background-color: var(--white);
    }

    #button-check .checkbox:checked + .switch-btn:before {
      left: -50px;
    }

    #button-check .checkbox:checked + .switch-btn:after {
      right: 4px;
    }

    #button-check .checkbox:checked ~ .layer {
      background-color: var(--primary-200);
    }
  }
`;

export default Wrapper;
