import { ReactComponent as Light } from '../assets/images/icon-light-theme.svg';
import { ReactComponent as Dark } from '../assets/images/icon-dark-theme.svg';
import ToggleSwitch from './ToggleSwitch';

const ModeToggler = () => {
  return (
    <div className='mode-toggler-container'>
      <Light className='mode-icon' />
      <ToggleSwitch />
      <Dark className='mode-icon' />
    </div>
  );
};
export default ModeToggler;
