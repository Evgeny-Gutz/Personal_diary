import Button from '../../components/Button/Button';
import CardFilm from '../../components/CardFilm/CardFilm';
import InputText from '../../components/InputSearch/InputText';
import Paragraph from '../../components/Paragraph/Paragraph';
import Title from '../../components/Title/Title';
import styles from './SearchFilms.module.css';
import { useEffect, useState, type FormEvent} from 'react';
import axios from 'axios';

interface MovieType {
  "#TITLE": string;
  "#YEAR": number;
  "#IMDB_ID": string;
  "#RANK": number;
  "#ACTORS": string;
  "#AKA": string;
  "#IMDB_URL": string;
  "#IMDB_IV": string;
  "#IMG_POSTER": string;
  photo_width: number;
  photo_height: number;
}

type SearchType = {
	search: {
		value: string;
	};
}

export const SearchFilms = () => {
	const [movies, setMovies] = useState<MovieType[]>([]);
	const [searchLine, setSearchLine] = useState('new');
	const [errorLoading, setErrorLoading] = useState<boolean>(false);

	const handleSearch = (event: FormEvent) => {
		event.preventDefault();
		const target = event.target as typeof event.target & SearchType;
		const searchValue = target.search.value;
		console.log(searchValue);
		setSearchLine(searchValue)

	}

	const getMovies = async (searchLine: string) => {
		try {
			const {data} = await axios.get(`https://search.imdbot.workers.dev/?q=${searchLine}`);
			setMovies(data.description);
			setErrorLoading(false);
		} catch (error) {
			setErrorLoading(true);
			console.error('Ошибка при загрузке фильмов:', error);
		}
	}

	useEffect(() => {
		getMovies(searchLine);
	}, [searchLine]);

    return (
        <>
            <div className={styles['search-header']}>
                <Title>Поиск</Title>
                <Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
                <form className={styles['search-form']} onSubmit={handleSearch}>
                    <InputText icon='search-normal.svg' placeholder='Введите название' name='search'/>
                    <Button>Искать</Button>
                </form>
            </div>
			{!errorLoading && 
				<div className={styles['movies-list']}>
                	{movies.map((movie) => <CardFilm 
						key={movie['#IMDB_ID']} 
						id={movie['#IMDB_ID']} 
						rating={movie['#RANK']} 
						filmName={movie['#AKA']} 
						poster={movie['#IMG_POSTER']}/>)}
            	</div>
			}
			{errorLoading && 
					<div className={styles['search-error']}>
						<Title level={2}>Упс... Ничего не найдено</Title>
						<Paragraph >Попробуйте изменить запрос или ввести более точное название фильма</Paragraph>
					</div>
			}
        </>
    );
};