const Input = ({ label, value, onChange, type = "text", placeholder }: any) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
