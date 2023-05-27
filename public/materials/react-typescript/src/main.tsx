import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import store from './store';

const container = document.getElementById('root');


ReactDOM.createRoot(container as HTMLDivElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
)
