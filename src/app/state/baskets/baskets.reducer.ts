
import { createAction, createReducer, on } from "@ngrx/store";

export const BasketsReducer = createReducer(
    0,
    on(createAction("[Baskets] Add Count"),(basketCount) => basketCount +=1)
)