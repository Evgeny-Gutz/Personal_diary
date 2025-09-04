import Paragraph from '../Paragraph/Paragraph';
import styles from './CardFilm.module.css';
import type { CardFilmProps } from './CardFilm.props';

const CardFilm = ({rating, poster, filmName}: CardFilmProps) => {
	return ( 
		<div className={styles['card-film']}>
			<div className={styles['card-film__rating']}>
				<img src="/star.svg" alt="Star" />
				<Paragraph>{rating}</Paragraph>
			</div>
			<img className={styles['card-film__poster']} src={`/${poster}`} alt={poster} />
			<p className={styles['card-film__title']}>{filmName}</p>
			<div className={styles['card-film__footer']}>
				<img src="/like.svg" alt="Like" />
				<p>В избранное</p>
			</div>
		</div>
	);
};

export default CardFilm;