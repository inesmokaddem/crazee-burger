import { useState } from "react"
import { fakeMenu } from "../data/fakeMenu"
import { deepClone } from "../utils/array"

export const useMenu = () => { 
  const [menu, setMenu] = useState(fakeMenu.MEDIUM)
    // comportements
    const handleAddMenu = (newProduct) => {
        // 1. copie du tableau
        const menuCopy = deepClone(menu)
        // 2. manip de la copie du tableau
        const menuUpdated = [newProduct, ...menuCopy]
        // 3. update du tableau via le setter dédié
        setMenu(menuUpdated)
    }

    const handleDeleteMenu = (idProductToDelete) => { 
        // 1. copie du state
        const menuCopy = deepClone(menu)
        // 2. manip de la copie du state
        const menuUpdated = menuCopy.filter((product) => product.id !== idProductToDelete)
        // 3. update du state
        setMenu(menuUpdated)
    } 

    const handleEditMenu = (productBeingEdited) => { 
        // 1. copie du state en mode deep clone
        const menuCopy = deepClone(menu)
        // 2. manip de la copie du state
        const indexOfProductToEdit = menu.findIndex(
        (menuProduct) => menuProduct.id === productBeingEdited.id)  

        menuCopy[indexOfProductToEdit] = productBeingEdited
        // 3. update du state via le setter dédié
        setMenu(menuCopy)
    } 

    const resetMenu = () => { 
        setMenu(fakeMenu.MEDIUM)
    }
    return {menu, setMenu, handleAddMenu, handleDeleteMenu, handleEditMenu, resetMenu}
 }