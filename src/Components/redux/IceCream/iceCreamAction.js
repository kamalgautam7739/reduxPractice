import {BUY_ICECREAM, NEW_ICECREAM_READY} from "./iceCreamTypes"
const buyIceCream = () =>{
    return {type:BUY_ICECREAM}
}
const newIceCreamReady=()=>{
    return{type:NEW_ICECREAM_READY}
}
export {buyIceCream, newIceCreamReady}