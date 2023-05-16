import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Loader } from '../components/index.jsx'

const Product = () => {
	const { productId } = useParams();
	const [ product, setProduct ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://dummyjson.com/products' + '/' + productId)
			.then(res => res.json())
			.then(data => {
				setProduct(data);
				setIsLoading(false);
			})
			.catch(e => {
				console.log(e)
			});
	}, [])

	return (
		<div>
			{ isLoading && <Loader />}
			{ product && (
				<>
					<div>title: {product.title}</div>
					<div>brand: {product.brand}</div>
					{product.images.map(img => <img src={img} key={img} alt={img} />)}
				</>
			)}
		</div>
	);
};

export default Product;

/*
brand
:
"Apple"
category
:
"smartphones"
description
:
"An apple mobile which is nothing like apple"
discountPercentage
:
12.96
id
:
1
images
:
(5) ['https://i.dummyjson.com/data/products/1/1.jpg', 'https://i.dummyjson.com/data/products/1/2.jpg', 'https://i.dummyjson.com/data/products/1/3.jpg', 'https://i.dummyjson.com/data/products/1/4.jpg', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg']
price
:
549
rating
:
4.69
stock
:
94
thumbnail
:
"https://i.dummyjson.com/data/products/1/thumbnail.jpg"
 */
