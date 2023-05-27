import { useEffect, useState } from 'react'

export function useFetch(initialUrl, options) {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ data, setData ] = useState();
	const [ url, setUrl] = useState(initialUrl || null);
	const [ error, setError] = useState(null);

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
};
