const Button = ({ text, type = "button", onClick, className = "" }: any) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
