import { useContext } from 'react'
import { userContext } from '../components/index.jsx'
import { Navigate } from 'react-router-dom'
import { routes } from './routes.js'

const ProtectedRoute = ({children}) => {
	const {user} = useContext(userContext);

	if (!user.isLoggedIn) {
		return <Navigate to={'/' + routes.about} />
	}

	return children;
};

export default ProtectedRoute;
