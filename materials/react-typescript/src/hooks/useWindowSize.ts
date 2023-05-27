import { useEffect, useState } from 'react'

type TUseWindowSize = {
	width: number;
	height: number;
}

export function useWindowSize(): TUseWindowSize {
	const [windowSize, setWindowSize] = useState<TUseWindowSize>({
		width: window.innerWidth,
		height: window.innerHeight
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			})
		}

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, [])

	return windowSize;
}
