import { UsersState, usersReducer } from './users/users.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { clothesReducer, ClothesState } from './clothes/clothes.reducers';

//interfaccia rappresentante lo stato globale
export interface AppState {
    [x: string]: any;
    usersState: UsersState;
    clothesState: ClothesState;
}

export const reducers: ActionReducerMap<AppState> = {
    usersState: usersReducer,
    clothesState: clothesReducer
};