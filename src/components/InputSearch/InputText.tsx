import { forwardRef } from 'react';
import styles from './InputText.module.css';
import type { InputTextProps } from './InputText.props';

const InputText = forwardRef<HTMLInputElement, InputTextProps>(({icon, ...rest}, ref) => {
	
	return (
		<div className={styles['input-wrapper']}>
			{icon ? <img src={`/${icon}`} alt="Icon"/>: null}
			<input ref={ref} className={styles.input} {...rest}/>
		</div>
	);
});

export default InputText;