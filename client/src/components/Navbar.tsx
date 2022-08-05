import Wrapper from '../assets/wrappers/Navbar';
import { useAppContext } from '../provider/appProvider';
import Button from './Button';
import Ellipsis from './Ellipsis';

const Navbar = () => {
  const { selectedBoard, boards, showSidebar } = useAppContext();

  return (
    <Wrapper>
      <div className={showSidebar ? 'nav-center' : 'nav-center expanded'}>
        <div className='nav-header'>
          <h1 className='nav-title '>{selectedBoard?.name}</h1>
        </div>
        <div className='nav-buttons '>
          <Button
            children={'+ Add New Task'}
            onClick={() => console.log('button clicked')}
            customClass='btn'
          />
          <Ellipsis onClick={() => console.log('ellipsisBtn clicked')} />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
