interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  customClass?: string;
  // type?: <HTMLButtonElement>
  disabled?: boolean;
}

const Button = ({ children, onClick, customClass }: Props) => {
  return (
    <>
      <button onClick={onClick} className={customClass}>
        {children}
      </button>
    </>
  );
};
export default Button;
