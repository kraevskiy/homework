import { useNavigate } from 'react-router-dom'
import React, { MouseEvent } from 'react';
import { CardProps } from './Card.props.ts';

export const Card: React.FC<CardProps> = ({ data, ...props }) => {
	const navigate = useNavigate();

	if (!data) {
		return null;
	}

	const handleClick = (e: MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		navigate(`/products/${data.id}`);
	}

	return (
		<div
			onClick={handleClick}
			className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col" {...props}>
			<a href="#" className="max-h-72 overflow-hidden">
				<img className="rounded-t-lg" src={data.thumbnail} alt="" />
			</a>
			<div className="p-5 flex flex-col items-start flex-auto">
				<a href="#">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.title}</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700 mb-3">{data.description}</p>
				<a href={`${data.id}`} className="inline-flex mt-auto items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
					Read more
					<svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"></path>
					</svg>
				</a>
			</div>
		</div>
	);
};
