import styles from './NavBar.module.css';
import type { NavBarProps } from './NavBar.props';

const NavBar = ({name, handleOut, handleIn}: NavBarProps) => {
	const userIcon = <img src="/user.svg" alt="Login" />;
	const iconIn = <img src="/login.svg" alt="Login" />;

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