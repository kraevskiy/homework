import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../types/product.types.ts';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	data: IProduct;
}
