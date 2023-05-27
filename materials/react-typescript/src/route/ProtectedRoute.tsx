import { Navigate } from 'react-router-dom';
import { routes } from './routes';
import { useAppSelector } from '../store';

const ProtectedRoute = ({children}: {children: JSX.Element}): JSX.Element => {
	const { isLoggedIn } = useAppSelector(state=> state.app);

	if (!isLoggedIn) {
		return <Navigate to={'/' + routes.about} />
	}

	return children;
};

export default ProtectedRoute;
