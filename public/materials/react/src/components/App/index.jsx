import { Layout } from '../';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from 'react';
import Routes from '../../route/index.jsx'

export const userContext = createContext();
const UserProvider = userContext.Provider;

export const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<UserProvider value={{
			user: {
				isLoggedIn,
				setIsLoggedIn
			}
		}}>
			<>
				<Routes />
				<ToastContainer />
			</>
		</UserProvider>
	)
}
