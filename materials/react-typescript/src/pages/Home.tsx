import { useEffect, useState, ChangeEvent } from 'react';
import { useDebounce } from '../hooks/useDebounce';

const Home = () => {
	const [value, setValue] = useState('');
	const debounceValue = useDebounce(value);

	useEffect(()=> {
		console.log(debounceValue);
	}, [debounceValue])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const {value} = e.target;
		setValue(value);
	}

	return (
		<div>
			<input type="text" value={value} onChange={handleChange}/>
		</div>
	);
};

export default Home;
