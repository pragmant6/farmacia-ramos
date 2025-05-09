import { createContext, useContext } from 'react';
import { IProduct } from '../../Interfaces/Dtos';
import { CartState, Person } from '../../Interfaces/types';

export const CartContext = createContext<{
	state: CartState;
	addItem: (person: Person, product: IProduct) => void;
	removeItem: (personId: string, productId: string) => void;
	clearCart: (personId: string) => void;
	confirmOrder: (personId: string) => void;
}>({
	state: { carts: [], orders: [] },
	addItem: () => {},
	removeItem: () => {},
	clearCart: () => {},
	confirmOrder: () => {},
});

export const useCart = () => useContext(CartContext);
