interface Props {
  children?: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <>
      <button
        onClick={onClick}
        className=' block bg-purple-100 hover:opacity-25  opacity-30 text-white px-6 py-3.5  rounded-3xl'
      >
        {children}
      </button>
    </>
  );
};
export default Button;
