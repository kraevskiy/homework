import React from 'react';
import { ButtonProps } from './Button.props';
import { colors } from '../../theme/colors';

export const Button: React.FC<ButtonProps> = ({ color = 'blue', className, ...props }) => {
	return (
		<button
			className={`text-base font-medium p-3 rounded-md ${colors[color]} hover:shadow-md hover:opacity-75 transition-all`}
			{...props}
		/>
	);
};
