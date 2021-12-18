import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake,newCakeReady } from './redux/cake/cakeActions'
 

export default function CakeContainerWithHook() {
    const noOfCakes = useSelector((state)=>state.cake.numberOfCakes)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>No. of cakes={noOfCakes}</h1>
            <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
            <button onClick={()=> dispatch(newCakeReady())}>New Cake REady</button>
            
        </div>
    )
}
