import { createReducer, on } from '@ngrx/store';
import { CartItem } from 'src/app/core/model/cart-item.interface';
import { addItemToCart, initCart, removeItemToCartById } from './cart.action';

export interface CartState{
    cart: CartItem[];
}

export const initialState: CartState = {
    cart: []
}

//gestisce transazioni State (da vecchio a nuovo stato)
export const cartReducers = createReducer(
    initialState,
    on(initCart, (state, {cart}) => ({...state, cart})),
    on(addItemToCart, (state, {cartItem}) => ({ ...state, cart: [...state.cart, cartItem] })),
    //Correct?
    on(removeItemToCartById, (state, {id}) => ({ ...state, cart: state.cart.filter(item => item.id !== id) })),
)