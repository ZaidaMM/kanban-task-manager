import { ReactComponent as Ellipsis } from '../assets/images/icon-vertical-ellipsis.svg';

interface Props {
  onClick: () => void;
}

const EllipsisBtn = ({ onClick }: Props) => {
  return (
    <>
      <Ellipsis onClick={onClick} className='ellipsis' />
    </>
  );
};

export default EllipsisBtn;
