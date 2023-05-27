import { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/useDebounce.js'

const Home = () => {
	const [value, setValue] = useState('');
	const debounceValue = useDebounce(value);

	useEffect(()=> {

	}, [debounceValue])

	const handleChange = (e) => {
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
