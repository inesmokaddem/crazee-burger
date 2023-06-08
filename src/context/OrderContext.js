import { createContext } from "react";

export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    // collapsed tab context
    isCollapsed: false,
    setIsCollapsed: () => {},

    // Selected tab context 
    currentTabSelected: false,
    setCurrentTabSelected: () => {},

    menu: [],
    handleAddProduct: () => {},
    handleDelete: () => {},
    handleEdit: () => {},
    resetMenu: () => {},

    newProduct: {},
    setNewProduct: () => {},

    productSelected: {},
    setProductSelected: () => {},

    titleEditRef: {},
})