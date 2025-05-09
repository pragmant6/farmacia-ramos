
import { IProduct } from "../../../Interfaces/Dtos";
import { CartState, Person } from "../../../Interfaces/types";



type CartAction =
  | { type: "ADD_ITEM"; payload: { person: Person; product: IProduct } }
  | { type: "REMOVE_ITEM"; payload: { personId: string; productId: string } }
  | { type: "CLEAR_CART"; payload: { personId: string } }
  | { type: "CONFIRM_ORDER"; payload: { personId: string } };


export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { person, product } = action.payload;
      const existingCart = state.carts.find(c => c.person.id === person.id);
      if (existingCart) {
        const updatedCart = existingCart.cart.find(p => p.id === product.id)
          ? existingCart.cart.map(p =>
            p.id === product.id
              ? { ...p, quantity: p.quantity + product.quantity }
              : p
          )
          : [...existingCart.cart, product];

        return {
          ...state,
          carts: state.carts.map(c =>
            c.person.id === person.id ? { ...c, cart: updatedCart } : c
          ),
        };
      } else {
        return {
          ...state,
          carts: [...state.carts, { person, cart: [product] }],
        };
      }
    }

    case "REMOVE_ITEM": {
      const { personId, productId } = action.payload;
      return {
        ...state,
        carts: state.carts.map(c =>
          c.person.id === personId
            ? {
              ...c,
              cart: c.cart.filter(p => p.id !== productId),
            }
            : c
        ),
      };
    }

    case "CLEAR_CART": {
      return {
        ...state,
        carts: state.carts.map(c =>
          c.person.id === action.payload.personId ? { ...c, cart: [] } : c
        ),
      };
    }

    case "CONFIRM_ORDER": {
      const personCart = state.carts.find(c => c.person.id === action.payload.personId);
      if (!personCart || personCart.cart.length === 0) return state;

      return {
        ...state,
        orders: [...state.orders, personCart],
        carts: state.carts.map(c =>
          c.person.id === action.payload.personId ? { ...c, cart: [] } : c
        ),
      };
    }

    default:
      return state;
  }
}