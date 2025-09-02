import styles from './App.module.css';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';
import NavBar from './layouts/Header/NavBar';
import InputText from './components/InputSearch/InputText';
import CardFilm from './components/CardFilm/CardFilm';

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

function App() {
	const sayHello = () => {
		alert('Првиет!');
	};

	return (
		<div className={styles.app}>
			<NavBar/>
			<InputText placeholder={'Введите название'} icon={'search-normal.svg'} onClick={sayHello} buttonText={'Искать'}/>
			<InputText placeholder={'Введите название'} onClick={sayHello} buttonText={'Войти в профиль'}/>
			<Title type='h3'>Войти в профиль</Title>
			<Button onClick={sayHello}>Я кнопка</Button>
			<Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing \n
        elit. Nesciunt consectetur inventore soluta asperiores pariatur, odit quas repellat quia corporis? Aut officia dolores commodi quisquam, blanditiis provident esse enim nobis recusandae!</Paragraph>
			<div>
				{FILMS_LIST.map(({id, rating, description, poster}) => <CardFilm key={id} rating={rating} description={description} poster={poster}/>)}
				
			</div>
		</div>
	);
}

export default App;
