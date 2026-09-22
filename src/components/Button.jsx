const Button = ({ varient, children, onClick }) => {
  const baseStyle =
    "px-4 py-2 rounded-md text-white font-semibold cursor-pointer transition-colors duration-300";
  const variantStyle =
    varient === "primary"
      ? "bg-green-500 hover:bg-green-600"
      : "bg-red-500 hover:bg-red-600";
  return (
    <>
      <button className={`${baseStyle} ${variantStyle}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
