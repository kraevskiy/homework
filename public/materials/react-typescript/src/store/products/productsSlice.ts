import { createSlice } from '@reduxjs/toolkit'
import { getProducts, setLimitReducer, setSkipReducer } from './productsReducers.ts'
import { IProduct } from '../../types/product.types.ts';

export interface IProductsState {
	list: IProduct[];
	isLoading: boolean;
	error: null | string;
	limit: number;
	skip: number;
	total: number;
}

const initialState: IProductsState = {
	list: [],
	isLoading: false,
	error: null,
	limit: 10,
	skip: 0,
	total: 0
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setLimitProducts: setLimitReducer,
		setSkipProducts: setSkipReducer
	},
	extraReducers: (builder) => {
		builder.addCase(getProducts.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.list = action.payload.products;
			state.total = action.payload.total;
		});
		builder.addCase(getProducts.rejected, (state) => {
			state.isLoading = false;
			// state.error = action?.payload?.message || 'error';
		});
	}
});

export const { setLimitProducts, setSkipProducts } = productsSlice.actions;

export default productsSlice.reducer;
