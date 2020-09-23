import {createAction, props} from '@ngrx/store';
import {CartItem} from '../../core/model/cart-item.interface';

export const initClothes = createAction('[Clothe] init clothes',  props<{clothes: CartItem[]}>());

//effects
export const retrieveAllClothes = createAction('[Clothes] effects - Retrieve all');
export const updateClothes = createAction('[Clothes] Effect - Update cartItem' )