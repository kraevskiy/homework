import { Card, Loader } from '../components/index.jsx';
import { useFetch } from '../hooks/useFetch.js';
import { useState } from 'react'
import Pagination from '../components/Pagination/index.jsx'
import { useWindowSize } from '../hooks/useWindowSize.js'

const LIMIT = 10;
const API_URL = `https://dummyjson.com/products/`;

const Products = () => {
	const [ { data: products, isLoading: isLoadingProducts }, doFetch ] = useFetch(API_URL + `/?limit=${LIMIT}`);
	const [ {
		data: categories,
		isLoading: isLoadingCategories
	} ] = useFetch('https://dummyjson.com/products/categories');
	const [ category, setCategory ] = useState('');
	const [ skip, setSkip ] = useState(0);
	const handleSelect = (e) => {
		setCategory(e.target.value);
		doFetch(API_URL + `category/${e.target.value}`)
	}

	const handlePage = (pageNumber) => {
		doFetch(API_URL + `/?limit=${LIMIT}&skip=${LIMIT * pageNumber}`);
		setSkip(pageNumber);
	}

	return (
		<>
			{(isLoadingProducts || isLoadingCategories) && <Loader />}
			<div className="flex justify-between mb-5 pt-3">
				{categories && (
					<label>
						<span>Category</span>
						<select value={category} onChange={handleSelect}>
							{categories.map(cat => <option value={cat} key={cat}>{cat}</option>)}
						</select>
					</label>
				)}
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
				{products && products.products && products.products.map(product => <Card data={product} key={product.id} />)}
			</div>
			{isLoadingProducts && <Loader />}
			{products && <Pagination
				limit={LIMIT}
				total={products.total}
				page={skip}
				changeHandler={handlePage}
			/>}
		</>
	);
};

export default Products;
