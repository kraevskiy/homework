import styles from './Header.module.scss';
import cn from 'classnames';
import { Button, userContext } from '../';
import { useContext } from 'react'
import { routes } from '../../route/routes.js'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logIn, logOut } from '../../store/app/appSlice.js'

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
	const { isLoggedIn } = useSelector(state=> state.app);
	const dispatch = useDispatch();

	const handleLogged = () => {
		if (isLoggedIn) {
			dispatch(logOut({simple: 1}));
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

