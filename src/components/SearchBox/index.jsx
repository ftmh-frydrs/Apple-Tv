const SearchBox = ({ type, placeholder, ...rest }) => {
  return (
    <input
      className="border border-white rounded-sm p-1 bg-black text-white"
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default SearchBox;
