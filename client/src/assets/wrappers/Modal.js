import styled from 'styled-components';

const Wrapper = styled.div`
  .modal-wrapper {
    position: absolute;
    /* top: 50%;
    left: 50%; */
    z-index: 100;
    height: 100vh;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.5);
  }

  .form {
    background-color: var(--white);
    padding: 32px;
  }
`;
export default Wrapper;
