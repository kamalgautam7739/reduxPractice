import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { buyIceCream, newIceCreamReady} from './redux/IceCream/iceCreamAction'
 

export default function IceCreamContainer() {
    const noOfIcecream = useSelector((state)=>state.iceCream.numberOfIcecreams)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>No. of ICE CREAM={noOfIcecream}</h1>
            <button onClick={()=> dispatch(buyIceCream())}>Buy Ice Cream</button>
            <button onClick={()=> dispatch(newIceCreamReady())}>New Icecraem REady</button>
            
        </div>
    )
}
