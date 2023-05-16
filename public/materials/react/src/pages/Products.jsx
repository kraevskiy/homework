import { useEffect, useState } from 'react';
import { Card, Loader } from '../components/index.jsx';

const Products = () => {
	const [ listProducts, setListProducts ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://dummyjson.com/products')
			.then(res => res.json())
			.then(data => {
				setListProducts(data.products);
				setIsLoading(false);
			});
	}, [])

	return (
		<>
			{isLoading && <Loader />}
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
				{listProducts.map(product => <Card data={product} key={product.id} />)}
			</div>
		</>
	);
};

export default Products;
