import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PaginationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	limit: number;
	total: number;
	skip: number;
	changeHandler: (pageNumber: number) => Promise<void>;
}
