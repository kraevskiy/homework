import { useEffect, useState, Dispatch, SetStateAction } from 'react';

type TStr = string | null;


export function useFetch<T>(initialUrl?: TStr, options?: RequestInit):  [{ data: T | null, isLoading: boolean, error: TStr}, Dispatch<SetStateAction<TStr>>] {
	const [ isLoading, setIsLoading ] = useState<boolean>(false);
	const [ data, setData ] = useState<T | null>(null);
	const [ url, setUrl] = useState<TStr>(initialUrl || null);
	const [ error, setError] = useState<TStr >(null);

	useEffect(() => {
		if (!url) {
			return;
		}
		setIsLoading(true);
		fetch(url, options)
			.then(res => res.json())
			.then(data => {
				setData(data);
				setIsLoading(false);
			})
			.catch(e => {
				setError(e);
				setIsLoading(false);
			});

	}, [url, options]);

	return [{ data, isLoading, error }, setUrl];
}
