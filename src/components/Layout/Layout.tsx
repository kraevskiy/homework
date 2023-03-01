import React from 'react';
import { LayoutProps } from './Layout.props';
import { Table } from '../';
import { useThemeMod } from '../../hooks/useThemeMod';
import { Button } from '../Button/Button';

export const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
	useThemeMod();
	return (
		<div
			className="app-wrapper text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800"
			{...props}
		>
			<div className="container mx-auto py-5">
				<div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 mb-10">
					Materials
				</div>
				<div className="bg-slate-50 rounded-xl overflow-hidden p-5 shadow dark:bg-gray-700 dark:text-slate-300">
					<Table />
				</div>
			</div>
		</div>
	);
};
