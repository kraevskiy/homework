import { Navigate } from 'react-router-dom'
import { routes } from './routes.js'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({children}) => {
	const { isLoggedIn } = useSelector(state=> state.app);

	if (!isLoggedIn) {
		return <Navigate to={'/' + routes.about} />
	}

	return children;
};

export default ProtectedRoute;
