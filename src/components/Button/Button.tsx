
import type { ButtonProps } from './Button.props';
import styles from './Button.module.css'
import cn from 'classnames';

const Button = ({children, className, ...rest}: ButtonProps) => {
	return (
		<button className={cn(styles.button, className )} {...rest}>{children}</button>
	);
};

export default Button;