import { useReducer } from 'react';
import { cartReducer } from '../../../../../Busisness/Reducers/Cart/CartReducer';
import { Person } from '../../../../../Interfaces/types';
import { IProduct } from '../../../../../Interfaces/Dtos';

export const useCartContext = () => {
	const [state, dispatch] = useReducer(cartReducer, {
		carts: [],
		orders: [],
	});

	const addItem = (person: Person, product: IProduct) =>
		dispatch({ type: 'ADD_ITEM', payload: { person, product } });

	const removeItem = (personId: string, productId: string) =>
		dispatch({ type: 'REMOVE_ITEM', payload: { personId, productId } });

	const clearCart = (personId: string) =>
		dispatch({ type: 'CLEAR_CART', payload: { personId } });

	const confirmOrder = (personId: string) =>
		dispatch({ type: 'CONFIRM_ORDER', payload: { personId } });
	return {
		state,
		addItem,
		removeItem,
		clearCart,
		confirmOrder,
	};
};
