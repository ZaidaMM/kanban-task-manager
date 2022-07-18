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
    .header {
      padding-left: 34px;
    }
    .sidebar-title {
      text-transform: uppercase;
      color: var(--grey-300);
      font-weight: 700;
      letter-spacing: 2.4px;
      padding-top: 70px;
      font-size: 12px;
      padding-left: 32px;
      padding-bottom: 19px;
    }
    .board-list {
      display: flex;
      flex-direction: column;
      padding-left: 32px;
    }
    .board-title {
      padding-left: 32px;
    }
  }
`;

export default Wrapper;
