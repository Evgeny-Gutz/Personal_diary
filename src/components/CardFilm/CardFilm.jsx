import Paragraph from '../Paragraph/Paragraph';
import styles from './CardFilm.module.css';

const CardFilm = ({rating, poster,  description}) => {
	return ( 
		<div className={styles['card-film']}>
			<div className={styles['card-film__rating']}>
				<img src="/star.svg" alt="Star" />
				<Paragraph>{rating}</Paragraph>
			</div>
			<img className={styles['card-film__poster']} src={`/${poster}`} alt={'shang-chi.png'} />
			<p className={styles['card-film__title']}>{description}</p>
			<div className={styles['card-film__footer']}>
				<img src="/like.svg" alt="Like" />
				<p>В избранное</p>
			</div>
		</div>
	);
};

export default CardFilm;