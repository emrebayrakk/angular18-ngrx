import { createAction, createReducer, on, props } from "@ngrx/store";
import { BasketModel } from "../../models/basket.model";
import * as BasketActions from "./baskets.actions"

export const initialState: BasketModel[] = [];
export const BasketsReducer = createReducer(
    initialState,
    on(BasketActions.addBasket,(state , {basket}) => {
        return [...state,basket]
    })
)