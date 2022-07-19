import Wrapper from '../assets/wrappers/Navbar';
import Button from './Button';
import Ellipsis from './Ellipsis';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <h1 className='nav-title '>Platform Launch</h1>
        <div className='nav-buttons '>
          <Button
            children='+ Add New Task'
            onClick={() => console.log('button clicked')}
          />
          <Ellipsis onClick={() => console.log('ellipsisBtn clicked')} />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
