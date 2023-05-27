import { createSlice } from '@reduxjs/toolkit';
import { logInReducer, logOutReducer } from './appReducers';

export interface IAppState {
	isLoggedIn: boolean;
}

const initialState: IAppState = {
	isLoggedIn: true,
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		logIn: logInReducer,
		logOut: logOutReducer,
	}
});

export const { logIn, logOut } = appSlice.actions;

export default appSlice.reducer;
