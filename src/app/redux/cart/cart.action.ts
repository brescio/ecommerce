import { createAction, props } from '@ngrx/store';
import { CartItem } from 'src/app/core/model/cart-item.interface';
import { Cart } from 'src/app/core/model/cart.interface';

//Init corrent carts - not saved all carts
export const initCart = createAction('[Cart] Init cart', props<{ cart: CartItem[] }>());
export const addItemToCart = createAction('[Cart] Add Item to cart', props<{ cartItem: CartItem }>());
export const removeItemToCartById = createAction('[Cart] Remove Item to cart', props<{ id: number }>());
