import { BUY_ICECREAM } from "./iceCreamTypes"
import { NEW_ICECREAM_READY } from "./iceCreamTypes"
const initialState = {
    numberOfIcecreams:40
}
export const iceCreamReducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numberOfIcecreams:state.numberOfIcecreams - 1
            }
            case NEW_ICECREAM_READY:
                return{
                    ...state,
                    numberOfIcecreams:state.numberOfIcecreams + 1
                }
            default:return state;
   
    }
}