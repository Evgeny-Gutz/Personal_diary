import Button from '../Button/Button';
import styles from './InputText.module.css';

const InputText = ({placeholder, icon, buttonText, onClick}) => {

	return (
		<form className={styles.form}>
			<div className={styles['form__input-search']}>
				{icon ? <img src={`/${icon}`} alt="Icon" name='Icon'/>: null}
				<input type="text" placeholder={placeholder} name={'someName'}/>
			</div>
			<Button onClick={onClick}>{buttonText}</Button>
		</form>
		
	);
};

export default InputText;