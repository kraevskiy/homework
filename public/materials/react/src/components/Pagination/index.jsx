import { Button } from '../Button/index.jsx'

const Pagination = ({limit, total, page, changeHandler,  ...props}) => {
	const pages = Array.from({length: Math.ceil(total / limit)}, (v, i) => i);

	const handleClick = (pageNumber) => {
		changeHandler(pageNumber)
	}
	console.log( page)
	return (
		<div className="flex gap-2" {...props}>
			{
				pages.map(p => <Button key={`${Math.random()}${p}`} onClick={() => handleClick(p)} appearance={p === page ? 'success' : undefined}>{p + 1}</Button>)
			}
		</div>
	);
};

export default Pagination;
