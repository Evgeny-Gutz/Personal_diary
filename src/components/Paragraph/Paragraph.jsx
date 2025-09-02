import styles from './Paragraph.module.css';

const Paragraph = ({children, ...rest}) => {
	return (
		<p className={styles.paragraph} {...rest}>{children}</p>
	);
};

export default Paragraph;