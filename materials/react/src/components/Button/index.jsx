import cn from 'classnames';

export const Button = ({appearance = 'info',  ...props}) => {

	return <button
		className={cn('focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5', {
			'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300': appearance === 'info',
			'bg-green-700 hover:bg-green-800 focus:ring-green-300': appearance === 'success',
			'bg-red-700 hover:bg-red-800 focus:ring-red-300': appearance === 'error',
		})}
		{...props}
	/>;
};

