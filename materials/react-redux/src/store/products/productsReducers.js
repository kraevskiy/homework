import { createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL } from './constans.js'

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async (pagination = { limit: 10, skip: 0 }) => {
		return await fetch(API_URL + `?limit=${pagination.limit}&skip=${pagination.skip}`).then(res => res.json())
	}
);

export const setLimitReducer = (state, action) => {
	state.limit = action.payload;
};

export const setSkipReducer = (state, action) => {
	state.skip = action.payload;
};
