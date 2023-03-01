import React from 'react';
import { BadgeProps } from './Badge.props';
import { colors } from './../../theme/colors';

export const Badge: React.FC<BadgeProps> = ({ color = 'blue', children, ...props }) => {
	return (
		<span className={`text-xs font-medium mr-2 px-3 py-1 rounded-full ${colors[color]}`} {...props}>
			{children}
		</span>
	);
};
