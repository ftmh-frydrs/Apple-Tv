const Divider = ({...rest}) => {
    return (
        <div className="flex justify-center">
  <div {...rest} className="w-[60%] h-px bg-gray-200 dark:bg-dark-300 mt-5"></div>
</div>
    )
};

export default Divider;