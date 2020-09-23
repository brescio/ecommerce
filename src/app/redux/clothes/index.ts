import { createSelector, select } from '@ngrx/store';
import { AppState } from '..';
import { ClothesState } from './clothes.reducers';


export const selectClotheState = (state: AppState) => state.clothesState;

//Selector = pure function per accedere a pezzo dello State (clothes in questo caso)
//da richiamare con una get per accedere ai vestiti - /come getTodos
export const selectClothes = createSelector(
    selectClotheState,
    (state: ClothesState) => state.clothes
)

export const getClothesById = createSelector(
    selectClotheState,
    (state: ClothesState, props: { id: number }) => state.clothes.find(item => item.id === props.id)
);
