import styles from './App.module.css';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';
import NavBar from './layouts/Header/NavBar';
import InputText from './components/InputSearch/InputText';
import CardFilm from './components/CardFilm/CardFilm';
import { GlobalContext } from './context/global.context';

import { useRef, useContext, useEffect} from 'react';
import { useLocalStorage } from './hooks/use-localstorage.hook';

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

// [{"name": "Вася", "isLogined": true}]

function App() {
	const inputText = useRef();
	const {dataUser, setContextDataUser} = useContext(GlobalContext);
	const [users, setUsers] = useLocalStorage('Users');

	useEffect(() => { // проверяем есть ли в localStorage залогиненный пользователь
		if(!users || users.length === 0) return;

		const hasUserLogin = users.find(user => user.isLogined);
		if(hasUserLogin) {
			setContextDataUser(hasUserLogin);
		}
	}, [setContextDataUser, users]);

	const handleLogin = (e) => {
		e.preventDefault();
		const inputValue = inputText.current.value.trim();

		if (inputValue === '') {
			alert('Поле не должно быть пустым');
			return;
		}
		
		const curentUser = users.find(el => el.name === inputValue);
		if(!curentUser) {
			alert('Такого пользователя нет!');
			return;
		}
		
		const updateUsers = users.map(user => {
			return user.name === inputValue ? {...user, isLogined: true} : user;
		});

		setUsers(updateUsers);
		setContextDataUser({...curentUser, isLogined: true});
		
		inputText.current.value = '';
		alert(`Пользователь ${inputValue} успешно авторизован!!!`);
		return;
	};

	const handleOut = () => {
		const updateUsers = users.map(user => {
			return user.name === dataUser.name ? {...user, isLogined: false} : user;
		});

		setUsers(updateUsers);
		setContextDataUser(prev => ({...prev, isLogined: false}));
	};

	const handleIn = () => {
		alert('Вход');
	};

	return (
		<div className={styles.app}>
			<NavBar name={dataUser.isLogined && dataUser.name} handleOut={handleOut} handleIn={handleIn}/>
			<InputText placeholder={'Введите название'} icon={'search-normal.svg'}/>
			<InputText placeholder={'Введите название'}/>

			<form className={styles.form} onSubmit={handleLogin}>
				<Title type='h1'>Вход</Title>
				<InputText ref={inputText} placeholder={'Введите название'} icon={'search-normal.svg'}/>
				<Button>Войти в профиль</Button>
			</form>


			<Title type='h3'>Войти в профиль</Title>
			<Button>Я кнопка</Button>
			<Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing \n
        elit. Nesciunt consectetur inventore soluta asperiores pariatur, odit quas repellat quia corporis? Aut officia dolores commodi quisquam, blanditiis provident esse enim nobis recusandae!</Paragraph>
			<div className={styles['film-list']}>
				{FILMS_LIST.map(({id, rating, description, poster}) => <CardFilm key={id} rating={rating} description={description} poster={poster}/>)}
			</div>
		</div>
	);
}

export default App;
