import { Suspense, lazy } from 'react'
import { Loader } from '../';
import { Outlet } from 'react-router-dom';

const Header = lazy(() => import('../Header'));

export const Layout = () => {

	return (
		<>
			<Suspense fallback={<Loader />}>
				<Header />
			</Suspense>
			<main className="flex container mx-auto">
				<Outlet />
			</main>
		</>
	);
};

