import styles from './Title.module.css';

const Title = ({type, children}) => {
	switch(type) {
	case 'h1':
		return <h1 className={styles.title1}>{children}</h1>;
	case 'h3':
		return <h3 className={styles.title3}>{children}</h3>;
	default:
		return null;
	}
};

export default Title;