import { useCart } from '../../Context/Cart/CartContext';
export const OrdersScreen = () => {
	const { state } = useCart();
	return (
		<div>
			<h2>Pedidos confirmados:</h2>
			{state.orders.map((order, idx) => (
				<div key={idx}>
					<h4>{order.person.name}</h4>
					<ul>
						{order.cart.map((p) => (
							<li key={p.id}>
								{p.name} x {p.quantity}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};
