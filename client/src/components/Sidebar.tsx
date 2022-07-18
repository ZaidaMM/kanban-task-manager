import Wrapper from '../assets/wrappers/Sidebar';
import Logo from './Logo';

const Sidebar = () => {
  return (
    <Wrapper>
      <div className='sidebar border-solid border-r-2 border-grey-200 pt-9 pl-8'>
        <Logo />

        <h2>TITLE</h2>
        <h3>Link1</h3>
        <h3>Link2</h3>
        <h3>Link3</h3>
      </div>
    </Wrapper>
  );
};
export default Sidebar;
