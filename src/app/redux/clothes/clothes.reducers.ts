import {Action, createReducer, on} from '@ngrx/store';
import { CartItem } from 'src/app/core/model/cart-item.interface';
import { initClothes } from './clothes.action';

//definizione state
export interface ClothesState {
  clothes: CartItem[];
}

//definizione stato iniziale dello state
export const initialState: ClothesState = {
  clothes: []
};

//funzione che gestisce i cambiamenti dello store - associa ad ogni action un comportamento
//reducer -> responsabili gestione transazione da una vecchia versione dello state a una nuova versione dello State
export const clothesReducer = createReducer(
  initialState,
  on(initClothes, (state, {clothes}) => ({...state, clothes})),
   //State iniziale, veriabile da passare - aggiorno lo state del clothes
);

//vera funzione di recucer - richiama la funzione sopra
export function reducer(state: ClothesState | undefined, action: Action) {
  return clothesReducer(state, action);
}
