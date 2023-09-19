import { useState } from "react"
import { fakeBasket } from "../data/fakeBasket"
import { deepClone, removeObjectById, findObjectById, findIndexById } from "../utils/array"

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY)

  const handleAddToBasket = (idProductToAdd) => { 
    // 1. copie du state (deepclone)
    const basketCopy = deepClone(basket)
    const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)

    if (productAlreadyInBasket){
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy);
    }

    createNewBasketProduct(idProductToAdd, basketCopy, setBasket)
   }

  const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndexById(idProductToAdd.id, basketCopy)
    basketCopy[indexOfBasketProductToIncrement].quantity += 1
    setBasket(basketCopy)
  }

  const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket) => {
    const newBasketProduct = { id: idProductToAdd, quantity: 1 }
    const newBasket = [newBasketProduct, ...basketCopy]
  
    setBasket(newBasket)
  }

  const handleDeleteBasketProduct = (idBasketProduct) => {
    //1. copy du state (optional because filter returns a new array )
    const basketCopy = deepClone(basket)

    //2. manip de la copie state
    //const basketUpdated = basketCopy.filter((product) => product.id !== idBasketProduct)
    const basketUpdated = removeObjectById(idBasketProduct, basketCopy)

    //3. update du state
    setBasket(basketUpdated)
  }

  return { basket, handleAddToBasket, handleDeleteBasketProduct }
}


