import { Link, NavLink } from 'react-router';
import styles from './NavBar.module.css';
import type { NavBarProps } from './NavBar.props';

const NavBar = ({name, handleOut, handleIn}: NavBarProps) => {
	const userIcon = <img src="/user.svg" alt="Login" />;
	const iconIn = <img src="/login.svg" alt="Login" />;

	return (
		<div className={styles['nav-bar']}>
			<Link to={'/'}><img src="/bookmark.svg" alt="Logo" /></Link>
			<ul> 
				<li><NavLink to="/">Поиск фильмов</NavLink></li>
				<li><NavLink to="/favorites">Мои фильмы<span>2</span></NavLink></li>
				{name && <li>{name}{userIcon}</li>}
				{name && <li><NavLink to={'/'} onClick={handleOut}>Выйти</NavLink></li>}
				{!name && <li><NavLink to={'/login'} onClick={handleIn}>Войти{iconIn}</NavLink></li>}
			</ul>
		</div>
	);
};

export default NavBar;