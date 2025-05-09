import { IProduct } from "../Dtos";

export type Person = {
  id: string;
  name: string;
  email: string;
};

export type CartByPerson = {
  person: Person;
  cart: IProduct[];
};

export type CartState = {
  carts: CartByPerson[];
  orders: CartByPerson[];
};