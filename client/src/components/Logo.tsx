import { ReactComponent as LogoLight } from '../assets/images/logo-light.svg';
import { ReactComponent as LogoDark } from '../assets/images/logo-dark.svg';
import { ReactComponent as LogoMobile } from '../assets/images/logo-mobile.svg';
import { useAppContext } from '../provider/appProvider';

const Logo = () => {
  const { showSidebar } = useAppContext();
  return (
    <div className={showSidebar ? 'logo' : 'logo-expanded'}>
      <LogoDark />
    </div>
  );
};
export default Logo;
