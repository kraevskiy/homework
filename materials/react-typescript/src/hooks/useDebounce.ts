import { useEffect, useState } from 'react'

export function useDebounce(value: string | number, delay?: number): string | number {
	const [debounceValue, setDebounceValue] = useState<string | number>(value);
	const delayValue = delay || 1000;

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebounceValue(value);
		}, delayValue);

		return () => clearTimeout(timer);
	}, [value, delayValue]);

	return debounceValue;
}
