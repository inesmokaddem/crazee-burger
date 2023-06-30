import { useState } from "react"
import { fakeBasket } from "../data/fakeBasket"

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.SMALL)
    return {basket}
 }