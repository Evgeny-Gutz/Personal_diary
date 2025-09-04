import cn from 'classnames';
import styles from './Paragraph.module.css';
import type { ParagraphProps } from './Paragraph.props';

const Paragraph = ({children, type, ...rest}:ParagraphProps) => {
	return (
		<p className={cn(styles.paragraph, styles.main, {
			[styles.description]: type === 'description',

		})} {...rest}>{children}</p>
	);
};

export default Paragraph;