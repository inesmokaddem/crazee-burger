import { createContext } from "react";

export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    // collapsed tab context
    isCollapsed: false,
    setIsCollapsed: () => {},

    // Selected tab context 
    currentTabSelected: false,
    setcurrentTabSelected: () => {},

    menu: [],
    handleAddProduct: () => {},
    handleDelete: () => {},
    resetMenu: () => {},

    newProduct: [],
    setNewProduct: () => {},

})