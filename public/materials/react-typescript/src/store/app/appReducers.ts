import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { IAppState } from './appSlice.ts';

export const logInReducer: CaseReducer<IAppState, PayloadAction<undefined>> = (state) => {
	state.isLoggedIn = true;
}

export const logOutReducer: CaseReducer<IAppState, PayloadAction<undefined>> = (state) => {
	state.isLoggedIn = false;
}
