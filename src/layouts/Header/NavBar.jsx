import styles from './NavBar.module.css';

const NavBar = () => {
	return (
		<div className={styles['nav-bar']}>
			<img src="/bookmark.svg" alt="Logo" />
			<ul> 
				<li><a href="#">Поиск фильмов</a></li>
				<li><a href="#">Мои фильмы<span>2</span></a></li>
				<li><a href="#">Войти<img src="/login.svg" alt="Login" /></a></li>
			</ul>
		</div>
	);
};

export default NavBar;