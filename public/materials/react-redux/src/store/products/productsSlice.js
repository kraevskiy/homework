import { createSlice } from '@reduxjs/toolkit'
import { getProducts, setLimitReducer, setSkipReducer } from './productsReducers.js'

const initialState = {
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
		builder.addCase(getProducts.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload.message;
		});
	}
});

export const { setLimitProducts, setSkipProducts } = productsSlice.actions;

export default productsSlice.reducer;
