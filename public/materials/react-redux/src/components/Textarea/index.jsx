import { forwardRef } from 'react'
import cn from 'classnames'

export const Textarea = forwardRef(function Textarea({ label, error, ...props}, ref) {
	return (
		<label>
			{label && <span className={cn("block mb-2 text-sm font-medium text-gray-900", {
				'text-red-900': error
			})}>
				{label}
			</span>}
			<textarea
				className={cn("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5", {
					'border-red-300': error
				})}
				ref={ref}
				{...props}
			/>
		</label>
	);
});

