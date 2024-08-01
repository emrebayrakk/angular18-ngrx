import { createReducer, on } from "@ngrx/store";
import { countIncrement } from "./counter.action";

export const number = 0;

export const CounterReducer = createReducer(
    number,
    on(countIncrement,(number) => number +=1 )
)