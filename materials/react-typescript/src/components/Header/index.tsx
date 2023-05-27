import styles from './Header.module.scss';
import cn from 'classnames';
import { Button } from '../';
import { routes } from '../../route/routes';
import { NavLink } from 'react-router-dom';
import { logIn, logOut } from '../../store/app/appSlice';
import { useAppDispatch, useAppSelector } from '../../store';

const navList = [
	{
		path: routes.home,
		text: 'Home'
	},
	{
		path: routes.products,
		text: 'Products'
	},
	{
		path: routes.about,
		text: 'About'
	}
]

const Header = () => {
	const { isLoggedIn } = useAppSelector(state=> state.app);
	const dispatch = useAppDispatch();

	const handleLogged = () => {
		if (isLoggedIn) {
			dispatch(logOut());
		} else {
			dispatch(logIn());
		}
	}

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src="https://lms.beetroot.academy/static/media/1.a1ff1c1e.svg" alt="" />
			</div>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					{
						navList.map(nav => <li key={nav.text + Math.random()}>
							<NavLink to={nav.path} className={({isActive}) => cn(styles.navLink, {
								[styles.navLinkActive]: isActive
							})}>
								{nav.text}
							</NavLink>
						</li>)
					}
				</ul>
			</nav>
			<Button onClick={handleLogged}>{isLoggedIn ? 'Log out' : 'Log in'} </Button>
		</header>
	);
};

export default Header;

