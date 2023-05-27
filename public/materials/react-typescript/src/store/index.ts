import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app/appSlice';
import productsReducer from './products/productsSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './types.ts';
import { api } from './API/api.ts';

const store = configureStore({
	reducer: {
		'app': appReducer,
		'products': productsReducer,
		[api.reducerPath]: api.reducer
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(api.middleware);
	}
});


export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
