import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.action';
import { Product } from './product.model';

export const initialState = 0;
export const ADD_PRODUCT = 'ADD_PRODUCT';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
export function counterReducer(state:any,action:any){

    return _counterReducer(state,action);
}

export function addProductReducer(state: Product[] = [], action:any) {
    switch (action.type) {
      case ADD_PRODUCT:
          return [...state, action.payload];
      default:
          return state;
      }
  }