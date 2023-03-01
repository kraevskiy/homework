import React from 'react';
import { TableProps } from './Table.props';
import { data } from '../../data/data';
import { TableRow } from '../';

export const Table: React.FC<TableProps> = ({...props}) => {
	return (
		<table className="w-full text-left" {...props}>
			<thead>
			<tr className="border-b-2 border-slate-300 dark:border-slate-500">
				<th className="py-2 px-2">Type</th>
				<th className="py-2 px-2">Name</th>
				<th className="py-2 px-2">Link to demo</th>
			</tr>
			</thead>
			<tbody>
			{data.map((row) => (
				<TableRow key={row.name} data={row} />
			))}
			</tbody>
		</table>
	);
};
