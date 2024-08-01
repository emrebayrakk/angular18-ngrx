import { createAction, props } from "@ngrx/store";
import { BasketModel } from "../../models/basket.model";

export const addBasket = createAction("[Baskets] Add Count",props<{"basket" : BasketModel}>())