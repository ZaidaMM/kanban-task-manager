interface Props {
  children?: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <>
      <button onClick={onClick} className='btn'>
        {children}
      </button>
    </>
  );
};
export default Button;
