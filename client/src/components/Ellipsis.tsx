import { ReactComponent as Ellipsis } from '../assets/images/icon-vertical-ellipsis.svg';

interface Props {
  onClick: () => void;
}

const EllipsisBtn = ({ onClick }: Props) => {
  return (
    <>
      <Ellipsis onClick={onClick} className='mx-6 cursor-pointer' />
    </>
  );
};
interface Props {}

export default EllipsisBtn;
