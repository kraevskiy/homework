import React, { ReactNode } from 'react';
import { TableRowProps } from './TableRow.props';
import { TDataType, TDataTypeValue, TDataLinks } from '../../data/data.types';
import { Badge, ButtonLink } from '../';
import { TThemeColor } from '../../theme/colors';

const getType = (type?: TDataType): ReactNode => {
	if (!type) {
		return '';
	}
	function typeByColor(someType: TDataTypeValue): TThemeColor {
		if (someType === 'Lesson') {
			return 'blue';
		} else {
			return 'green';
		}
	}
	if (Array.isArray(type)) {
		return type.map((t) => (
			<Badge key={t} color={typeByColor(t)}>
				{t}
			</Badge>
		));
	} else {
		return <Badge color={typeByColor(type)}>{type}</Badge>;
	}
};

const getBtns = (btns?: TDataLinks): ReactNode => {
	if (!btns) {
		return '';
	}
	return Object.keys(btns).map((btn) => (
		<ButtonLink
			key={btn}
			color={btn === 'demo' ? 'blue' : 'green'}
			href={btns[btn as keyof TDataLinks]}
			target="_blank"
		>
			{btn.toUpperCase()}
		</ButtonLink>
	));
};

export const TableRow: React.FC<TableRowProps> = ({ data, ...props }) => {
	return (
		<tr className="border-b border-slate-200 dark:border-slate-600" {...props}>
			<td className="py-2 px-2">{getType(data.type)}</td>
			<td className="py-2 px-2">{data.name}</td>
			<td className="py-2 px-2">{getBtns(data.links)}</td>
		</tr>
	);
};
