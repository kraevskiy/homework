import React from 'react';
import { ButtonLinkProps } from './ButtonLink.props';
import { colors } from '../../theme/colors';

export const ButtonLink: React.FC<ButtonLinkProps> = ({ color = 'blue', className, ...props }) => {
	return (
		<a
			className={`inline-flex text-base font-medium p-3 rounded-md mr-2 ${colors[color]} hover:shadow-md hover:opacity-75 transition-all`}
			{...props}
		/>
	);
};
