// components/Header.tsx
import { useEffect, useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '../../Context/Cart/CartContext';

export default function Header() {
	const { state, addItem, removeItem, confirmOrder } = useCart();
	const [showCart, setShowCart] = useState(false);

	const toggleCart = () => setShowCart((prev) => !prev);

	const person = {
		id: '1',
		name: 'profile',
		email: '',
	};

	useEffect(() => {
		console.log('State changed:', state.carts);
	}, [state]);

	return (
		<div className='flex items-center justify-between w-full h-14 bg-amber-400 px-4 relative'>
			<img
				src='/profile.jpg'
				alt='Profile'
				className='h-10 w-10 rounded-full object-cover'
			/>
			<span className='text-white font-bold text-lg'>Juan Pérez</span>
			<div className='relative'>
				<ShoppingCart
					className='text-white cursor-pointer'
					onClick={toggleCart}
				/>
				{state.carts.length > 0 && (
					<span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1'>
						{state.carts[0].cart.reduce((sum, item) => sum + item.quantity, 0)}
					</span>
				)}
			</div>

			{showCart && (
				<div className='absolute right-4 top-16 bg-white shadow-lg rounded-lg p-4 w-72 z-50 flex flex-col max-h-[400px]'>
					<h2 className='font-semibold text-lg mb-2'>Carrito de compras</h2>
					{state.carts.length === 0 ? (
						<p className='text-gray-500 flex-1'>Tu carrito está vacío.</p>
					) : (
						<>
							<ul className='space-y-3 overflow-y-auto flex-1 max-h-[240px] pr-1'>
								{state.carts[0].cart.map((item: any) => (
									<li key={item.id} className='flex items-center gap-3'>
										<img
											src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`}
											alt={item.name}
											className='h-12 w-12 object-cover rounded'
										/>
										<div className='flex-1'>
											<p className='text-sm font-medium'>{item.name}</p>
											<div className='flex items-center gap-2 mt-1'>
												<button
													onClick={() => removeItem(person.id, item.id)}
													className='p-1 bg-red-500 text-white rounded'>
													<Minus size={14} />
												</button>
												<span>{item.quantity}</span>
												<button
													onClick={() => addItem(person, item)}
													className='p-1 bg-green-500 text-white rounded'>
													<Plus size={14} />
												</button>
											</div>
										</div>
									</li>
								))}
							</ul>
							<button
								onClick={() => {
									confirmOrder(person.id);
								}}
								className='mt-4 bg-amber-500 text-white font-semibold py-2 px-4 rounded hover:bg-amber-600 transition-colors'>
								Confirmar pedido
							</button>
						</>
					)}
				</div>
			)}
		</div>
	);
}
