import { createSelector, select } from '@ngrx/store';
import { AppState } from '..';
import { CartState } from './cart.reducers';

export const selectClotheState = (state: AppState) => state.cartState;

//Selector = pure function per accedere a pezzo dello State (clothes in questo caso)
//da richiamare con una get per accedere agli elementi del carrello
export const getCartItem = createSelector(
    selectClotheState,
    (state: CartState) => state.cart
)


