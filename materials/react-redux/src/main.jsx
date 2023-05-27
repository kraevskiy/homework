import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/index.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/index.js';

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
)
