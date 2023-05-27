import { createContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from '../../route';

interface IUserContext {
	used: {
		isLoggedIn: boolean;
		handleLogIn: (val: boolean) => void;
	}
}

export const userContext = createContext<IUserContext>({} as IUserContext)
const UserCtxProvider = userContext.Provider;

export const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogIn = (val: boolean) => {
		setIsLoggedIn(val)
	}

	return (
		<UserCtxProvider
			value={{
				used: {
					isLoggedIn,
					handleLogIn
			}
		}}>
			<Routes />
			<ToastContainer />
		</UserCtxProvider>
	);
};

