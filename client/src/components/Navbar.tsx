import Wrapper from '../assets/wrappers/Navbar';
import { ReactComponent as Ellipsis } from '../assets/images/icon-vertical-ellipsis.svg';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center flex items-center justify-between py-7 w-full border-solid border-b-2 border-grey-200'>
        <h1 className='nav-title lead '>Platform Launch</h1>
        <div className='nav-buttons flex items-center '>
          <button className=' block bg-purple-100 hover:opacity-25  opacity-30 text-white px-6 py-3.5  rounded-3xl'>
            + Add New Task
          </button>
          <Ellipsis className='mx-6 cursor-pointer' />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
