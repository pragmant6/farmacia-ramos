import { ReactNode } from 'react';
import { CartContext } from '../../Context/Cart/CartContext';
import { useCartContext } from '../../Context/Layout/Hooks/Context/Cart/useCartContex';

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const _cartContext = useCartContext();

	return (
		<CartContext.Provider value={_cartContext}>{children}</CartContext.Provider>
	);
};
