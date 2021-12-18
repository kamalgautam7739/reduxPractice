import {BUY_CAKE, NEW_CAKE_READY} from "./cakeTypes"
const buyCake = () =>{
    return {type:BUY_CAKE}
}
const newCakeReady=()=>{
    return{type:NEW_CAKE_READY}
}
export {buyCake, newCakeReady}