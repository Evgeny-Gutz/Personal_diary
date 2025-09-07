import { Link } from 'react-router-dom';
import styles from './CardFilm.module.css';
import type { CardFilmProps } from './CardFilm.props';

const CardFilm = ({id, rating, poster, filmName}: CardFilmProps) => {
	
	return ( 
		<Link className={styles['card-film']} to={`/movie/${id}`}>
			<div className={styles['card-film__rating']}>
				<img src="/star.svg" alt="Star" />
				{rating}
			</div>
			<img className={styles['card-film__poster']} src={`/${poster}`} alt={poster} />
			<p className={styles['card-film__title']}>{filmName}</p>
			<div className={styles['card-film__footer']}>
				<img src="/like.svg" alt="Like" />
				<p>В избранное</p>
			</div>
		</Link>
	);
};

export default CardFilm;