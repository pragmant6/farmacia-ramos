import { useEffect, useState } from 'react';
import { IProduct } from '../../Interfaces/Dtos';
import { ProductService } from '../Products/ProductService';
import { useCart } from '../../Context/Cart/CartContext';

export const CatalogScreen = () => {
	const { addItem } = useCart();
	const person = {
		id: '1',
		name: 'profile',
		email: '',
	};

	const [products, setProducts] = useState<IProduct[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 25;

	useEffect(() => {
		ProductService.getProducts().then((data) => setProducts(data));
	}, []);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
	const totalPages = Math.ceil(products.length / itemsPerPage);

	const handlePrevPage = () => {
		if (currentPage > 1) setCurrentPage(currentPage - 1);
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) setCurrentPage(currentPage + 1);
	};

	return (
		<div className='flex flex-col w-full'>
			{/* Grid scrollable */}
			<div className='flex-1 overflow-y-auto p-4'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4'>
					{currentProducts.map((product) => (
						<div
							onClick={() => addItem(person, product)}
							key={product.id}
							className='bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center'>
							<img
								src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
								alt={product.image}
								className='h-32 object-cover mb-2 rounded-lg'
							/>
							<h3 className='text-lg font-semibold'>{product.name}</h3>
							<h4 className='text-lg font-semibold'>{product.id}</h4>
							<p className='text-green-600 font-bold'>{product.price}</p>
						</div>
					))}
				</div>
			</div>

			{/* Footer de paginación fijo */}
			<div className='p-4 border-t bg-white shadow-md w-full flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-sm sm:text-base'>
				<button
					onClick={handlePrevPage}
					disabled={currentPage === 1}
					className='px-3 py-1 sm:px-4 sm:py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50'>
					Anterior
				</button>
				<span className='font-semibold'>
					Página {currentPage} de {totalPages}
				</span>
				<button
					onClick={handleNextPage}
					disabled={currentPage === totalPages}
					className='px-3 py-1 sm:px-4 sm:py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50'>
					Siguiente
				</button>
			</div>
		</div>
	);
};
