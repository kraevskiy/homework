import { useEffect, useState } from 'react'

export function useDebounce(value, delay = 1000) {
	const [debounceValue, setDebounceValue] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebounceValue(value);
		}, 2000);

		return () => clearTimeout(timer);
	}, [value, delay]);

	return debounceValue;
}
