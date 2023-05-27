import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app/appSlice.js';
import productsReducer from './products/productsSlice.js';

export const store = configureStore({
	reducer: {
		'app': appReducer,
		'products': productsReducer
	}
});
