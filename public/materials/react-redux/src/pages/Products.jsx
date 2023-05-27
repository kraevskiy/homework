import { Card, Loader } from '../components/index.jsx';
import { useEffect } from 'react';
import Pagination from '../components/Pagination/index.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/products/productsReducers.js';
import { setLimitProducts, setSkipProducts } from '../store/products/productsSlice.js';

const Products = () => {
	const { products  } = useSelector(state => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	const handlePage = async (pageNumber) => {
		dispatch(setSkipProducts(pageNumber * products.limit));
		dispatch(getProducts({
			skip: pageNumber * products.limit,
			limit: products.limit
		}))
	}

	const handleLimit = async (e) => {
		const newLimit = Number(e.target.value);
		dispatch(setLimitProducts(newLimit));
		dispatch(getProducts({
			skip: 0,
			limit: newLimit
		}))

	}

	return (
		<>
			{products.isLoading && <Loader />}
			{products.list && <Pagination
				limit={products.limit}
				total={products.total}
				skip={products.skip}
				changeHandler={handlePage}
			/>}
			<label >
				<span>Count per page: </span>
				<select onChange={handleLimit} value={products.limit}>
					<option value="10">10</option>
					<option value="20">20</option>
					<option value="30">30</option>
				</select>
			</label>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
				{products.list.map(product => <Card data={product} key={product.id} />)}
			</div>
			{/*{isLoadingProducts && <Loader />}*/}
		</>
	);
};

export default Products;
