import { useParams } from 'react-router-dom';
import { Loader } from '../components/index.jsx';
import { useFetch } from '../hooks/useFetch.js';
import { useWindowSize } from '../hooks/useWindowSize.js'

const Product = () => {
	const { productId } = useParams();
	const [ { data, isLoading } ] = useFetch('https://dummyjson.com/products' + `/${productId}`);
	return (
		<div>
			{isLoading && <Loader />}
			{data && (
				<>
					<div>title: {data.title}</div>
					<div>brand: {data.brand}</div>
					{data.images.map(img => <img src={img} key={img} alt={img} />)}
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
