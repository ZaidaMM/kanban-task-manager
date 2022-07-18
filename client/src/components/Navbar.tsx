import Wrapper from '../assets/wrappers/Navbar';
import { ReactComponent as Ellipsis } from '../assets/images/icon-vertical-ellipsis.svg';
import Button from './Button';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center flex items-center justify-between py-7 w-full border-solid border-b-2 border-grey-200'>
        <h1 className='nav-title '>Platform Launch</h1>
        <div className='nav-buttons flex items-center '>
          <Button
            children='+ Add New Task'
            onClick={() => console.log('clicked')}
          />
          <Ellipsis className='mx-6 cursor-pointer' />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
