import { Card, Loader } from '../components/';
import { ChangeEvent, useState } from 'react';
import Pagination from '../components/Pagination';
// import { getProducts } from '../store/products/productsReducers.ts';
// import { setLimitProducts, setSkipProducts } from '../store/products/productsSlice.ts';
// import { useAppDispatch, useAppSelector } from '../store';
import { useGetAllProductsQuery } from '../store/API/api.ts';

const Products = () => {
	const [pagination, setPagination] = useState<{limit: number, skip: number}>({
		skip: 0,
		limit: 10
	})
	const {data: products, isLoading, isFetching } = useGetAllProductsQuery({...pagination});
	// const [doFetch, {data: products, isLoading }] = useGetAllProductsMMutation();

	const handlePage = async (pageNumber: number) => {
		setPagination(prev => ({
			...prev,
			skip: pageNumber * prev.limit,
		}))
	}

	const handleLimit = async (e: ChangeEvent<HTMLSelectElement>) => {
		const newLimit = Number(e.target.value);
		setPagination(prev => ({
			...prev,
			limit: newLimit
		}))

	}

	return (
		<>
			{isLoading || isFetching && <Loader />}
			{
				products?.products &&  <Pagination
					limit={products.limit}
					total={products.total}
					skip={products.skip}
					changeHandler={handlePage}
				/>
			}
			<label >
				<span>Count per page: </span>
				<select onChange={handleLimit} value={products?.limit}>
					<option value="10">10</option>
					<option value="20">20</option>
					<option value="30">30</option>
				</select>
			</label>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
				{products?.products.map(product => <Card data={product} key={product.id} />)}
			</div>
			{/*{isLoadingProducts && <Loader />}*/}
		</>
	);
};

export default Products;
