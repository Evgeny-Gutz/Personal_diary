import styles from './InputText.module.css';

const InputText = ({icon, ...rest}) => {
	
	return (
		<div className={styles['input-text']}>
			{icon ? <img src={`/${icon}`} alt="Icon" name='Icon'/>: null}
			<input {...rest}/>
		</div>
	);
};

export default InputText;