import { combineReducers } from "redux";
import { cakeReducer } from "./cake/cakeReducer";
import { iceCreamReducer } from "./IceCream/iceCreamReducer";

export const rootReducer = combineReducers({
   cake: cakeReducer,
   iceCream : iceCreamReducer
})