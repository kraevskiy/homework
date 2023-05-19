import {BrowserRouter , Routes as RouterRoutes, Route } from 'react-router-dom';
import { routes } from './routes.js';
import { Layout, Loader } from '../components/index';
import { lazy, Suspense } from 'react';
import ProtectedRoute from './ProtectedRoute.jsx'

const Home = lazy(() => import('../pages/Home.jsx'));
const Products = lazy(() => import('../pages/Products.jsx'));
const About = lazy(() => import('../pages/About.jsx'));
const Product = lazy(() => import('../pages/Product.jsx'));
const NotFound = lazy(() => import('../pages/NotFound.jsx'));

const Routes = () => {
	return (
		<BrowserRouter>
			<RouterRoutes>
				<Route element={<Layout />}>
					<Route index element={<Suspense fallback={<Loader />}><Home/></Suspense>}/>
					<Route path={routes.products} element={<Suspense fallback={<Loader />}>
						<ProtectedRoute>
							<Products/>
						</ProtectedRoute>
					</Suspense>}/>
					<Route path={routes.products + '/:productId'} element={<Suspense fallback={<Loader />}><Product/></Suspense>}/>
					<Route path={routes.about} element={<Suspense fallback={<Loader />}><About/></Suspense>}/>
					<Route path="*" element={<Suspense fallback={<Loader />}><NotFound/></Suspense>}/>
				</Route>
			</RouterRoutes>
		</BrowserRouter>
	);
};

export default Routes;
