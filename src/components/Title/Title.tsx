import classNames from 'classnames';
import styles from './Title.module.css';
import type { TitleProps } from './Title.props';

const Title = ({level=1, children, ...rest}: TitleProps) => (
	<h1 className={classNames(styles.title, styles[`h${level}`])} {...rest}>{children}</h1>
);

export default Title;