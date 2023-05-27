import { IProduct } from '../../types/product.types.ts';

export interface IApiTypesResponse {
	limit: number;
	products: IProduct[];
	skip: number;
	total: number;
}

export interface IAPITypesRequest {
	limit?: number;
	skip?: number
}
