import styles from './NavBar.module.css';

const NavBar = ({name = undefined, setDataUser}) => {
	const userIcon = <img src="/user.svg" alt="Login" />;
	const iconIn = <img src="/login.svg" alt="Login" />;

	const handleOut = () => {
		setDataUser(prev => ({...prev, isLogined: false}));
	};

	const handleIn = () => {
		alert('Вход');
	};

	return (
		<div className={styles['nav-bar']}>
			<img src="/bookmark.svg" alt="Logo" />
			<ul> 
				<li><a href="#">Поиск фильмов</a></li>
				<li><a href="#">Мои фильмы<span>2</span></a></li>
				{name && <li><a href="#">{name}{userIcon}</a></li>}
				{name && <li><a href="#" onClick={handleOut}>Выйти</a></li>}
				{!name && <li><a href="#" onClick={handleIn}>Войти{iconIn}</a></li>}
			</ul>
		</div>
	);
};

export default NavBar;