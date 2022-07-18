import Wrapper from '../assets/wrappers/Navbar';
import Button from './Button';
import Ellipsis from './Ellipsis';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center flex items-center justify-between py-7 w-full border-solid border-b-2 border-grey-200'>
        <h1 className='nav-title '>Platform Launch</h1>
        <div className='nav-buttons flex items-center '>
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
