import classNames from 'classnames';
import styles from './Title.module.css';

const Title = ({type, children, ...rest}) => {
	switch(type) {
	case 'h1':
		return <h1 className={classNames(styles.title, styles.h1)} {...rest}>{children}</h1>;
	case 'h3':
		return <h3 className={classNames(styles.title, styles.h3)} {...rest}>{children}</h3>;
	default:
		return null;
	}
};

export default Title;