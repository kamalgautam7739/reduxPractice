import { BUY_CAKE, NEW_CAKE_READY } from "./cakeTypes"

const initialState = { numberOfCakes:10}


export const cakeReducer=(state=initialState ,action)=>{
    
    switch(action.type){
        
        case BUY_CAKE:
        return{
            ...state,
            numberOfCakes:state.numberOfCakes - 1
        }
        case NEW_CAKE_READY:
            return{
                ...state,
                numberOfCakes:state.numberOfCakes + 1
            }
        default:return state;
}
}