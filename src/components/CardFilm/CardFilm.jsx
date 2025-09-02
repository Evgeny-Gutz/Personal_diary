import Paragraph from '../Paragraph/Paragraph';
import './CardFilm.css';

const CardFilm = ({rating, poster,  description}) => {
	return ( 
		<div className='card-film'>
			<div className='card-film__rating'>
				<img src="/star.svg" alt="Star" />
				<Paragraph>{rating}</Paragraph>
			</div>
			<img className='card-film__poster' src={`/${poster}`} alt={'shang-chi.png'} />
			<p className='card-film__title'>{description}</p>
			<div className='card-film__footer'>
				<img src="/like.svg" alt="Like" />
				<p>В избранное</p>
			</div>
		</div>
	);
};

export default CardFilm;