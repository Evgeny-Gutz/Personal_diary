import { Link } from 'react-router-dom';
import styles from './CardFilm.module.css';
import type { CardFilmProps } from './CardFilm.props';

const CardFilm = ({id, rating, poster, filmName}: CardFilmProps) => {
	
	return ( 
		<div className={styles['card-film']}>
			<div className={styles['card-film__rating']}>
				<img src="/star.svg" alt="Star" />
				{rating}
			</div>
			<Link className={styles['card-film__link']} to={`/movie/${id}`}><img className={styles['card-film__poster']} src={`${poster}`} alt={poster} /></Link>
			<div className={styles['card-film__footer']}>
				<Link className={styles['card-film__link']} to={`/movie/${id}`}><p className={styles['card-film__title']}>{filmName}</p></Link>
				<div className={styles['card-film__toFavorites']}>
					<img src="/like.svg" alt="Like" />
					<p>В избранное</p>
				</div>
			</div>
		</div>
	);
};

export default CardFilm;