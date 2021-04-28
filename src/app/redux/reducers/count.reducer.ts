import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, multiply, divide } from '../actions/count.actions';

export const initialState = 10;

const CONSTREDUCER = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(multiply, (state, { num }) => state * num),
    on(divide, (state, { num }) => state / num),
    on(reset, (state) => 10)
);

export function countReducer(state, action) {
    return CONSTREDUCER(state, action);
}