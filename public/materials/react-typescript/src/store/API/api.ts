import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAPITypesRequest, IApiTypesResponse } from './api.types.ts';


export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://dummyjson.com'
	}),
	endpoints: (build) => ({
		getAllProducts: build.query<IApiTypesResponse, IAPITypesRequest>({
			query: (data) => ({
				url: `products/?skip=${data.skip ? data.skip : 0}&limit=${data.limit ? data.limit : 10}`,
				method: 'GET',
			})
		}),
		getAllProductsM: build.mutation<IApiTypesResponse, IAPITypesRequest>({
			query: (data) => ({
				url: `products/?skip=${data.skip ? data.skip : 0}&limit=${data.limit ? data.limit : 10}`,
				method: 'GET',
			})
		}),
	})
});

export const { useGetAllProductsQuery, useGetAllProductsMMutation } = api;
