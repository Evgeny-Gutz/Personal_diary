import Button from '../../components/Button/Button';
import CardFilm from '../../components/CardFilm/CardFilm';
import InputText from '../../components/InputSearch/InputText';
import Paragraph from '../../components/Paragraph/Paragraph';
import Title from '../../components/Title/Title';
import styles from './SearchFilms.module.css';

const FILMS_LIST = [
	{
		id: 1,
		rating: 324,
		description: 'Black Widow',
		poster: 'black-widow.png'
	},
	{
		id: 2,
		rating: 124,
		description: 'Shang Chi',
		poster: 'chang-chi.png'
	},
	{
		id: 3,
		rating: 235,
		description: 'Loki',
		poster: 'loki.png'
	},
	{
		id: 4,
		rating: 123,
		description: 'How I Met Your Mother',
		poster: 'how-i-meet.png'
	},
	{
		id: 5,
		rating: 8125,
		description: 'Money Heist',
		poster: 'money-heist.png'
	},
	{
		id: 6,
		rating: 123,
		description: 'Friends',
		poster: 'frends.png'
	},
	{
		id: 7,
		rating: 12,
		description: 'The Big Bang Theory',
		poster: 'big-bang.png'
	},
	{
		id: 8,
		rating: 459,
		description: 'Two And a Half Men',
		poster: 'two-and-half.png'
	}
];

export const SearchFilms = () => {
    return (
        <>
            <div className={styles['search-header']}>
                <Title>Поиск</Title>
                <Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
                <form className={styles['search-form']}>
                    <InputText icon='search-normal.svg' placeholder='Введите название'/>
                    <Button>Искать</Button>
                </form>
            </div>
            <div className={styles['movies-list']}>
                {FILMS_LIST.map(({id, rating, description, poster}) => <CardFilm key={id} id={id} rating={rating} filmName={description} poster={poster}/>)}
            </div>
        </>
    );
};