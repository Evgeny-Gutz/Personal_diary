import stryles from './Button.module.css';

const Button = ({children, onClick}) => {
	return (
		<button className={stryles.button} onClick={onClick}>{children}</button>
	);
};

export default Button;