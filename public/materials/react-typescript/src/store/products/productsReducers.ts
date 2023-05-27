import { CaseReducer, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { API_URL } from './constans.ts'
import { IProductsState } from './productsSlice.ts';

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async (pagination: {limit: number; skip: number} = { limit: 10, skip: 0 }) => {
		return await fetch(API_URL + `?limit=${pagination.limit}&skip=${pagination.skip}`).then(res => res.json())
	}
);

export const setLimitReducer: CaseReducer<IProductsState, PayloadAction<number>> = (state, action) => {
	state.limit = action.payload;
};

export const setSkipReducer: CaseReducer<IProductsState, PayloadAction<number>> = (state, action) => {
	state.skip = action.payload;
};
