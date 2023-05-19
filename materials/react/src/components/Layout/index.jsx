import { Suspense, lazy } from 'react'
import { Loader } from '../';
import { Outlet } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize.js'

const Header = lazy(() => import('../Header'));

export const Layout = () => {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Header />
			</Suspense>
			<main className="flex flex-col container mx-auto">
				<Outlet />
			</main>
		</>
	);
};

