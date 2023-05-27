import { Button } from '../Button'
import React from 'react';
import { PaginationProps } from './Pagination.props.ts';

const Pagination: React.FC<PaginationProps> = ({limit, total, skip, changeHandler,  ...props}) => {
	const pages = Array.from({length: Math.ceil(total / limit)}, (_, i) => i);
	const handleClick = (pageNumber: number) => {
		changeHandler(pageNumber)
	}

	return (
		<div className="flex gap-2" {...props}>
			{
				pages.map(p => <Button
					key={`${Math.random()}${p}`}
					onClick={() => handleClick(p)}
					appearance={p === skip / limit ? 'success' : undefined}>
					{p + 1}
				</Button>)
			}
		</div>
	);
};

export default Pagination;
