const Button = ({button , ...rest}) => {
    return (
        <button {...rest}>{button}</button>
    )
};

export default Button;