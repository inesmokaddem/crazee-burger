import { useRef, useState } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../context/OrderContext';
import { theme } from '../../../theme';
import MainRightSide from './Main/MainRightSide/MainRightSide';
import Navbar from './navbar/Navbar';
import { fakeMenu } from "../../../data/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { deepClone } from '../../../utils/array';



export default function OrderPage(){
  // state 
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [menu, setMenu] = useState(fakeMenu.MEDIUM)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
  const titleEditRef = useRef()


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

  const handleEdit = (productBeingEdited) => { 
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

  const handleSelectedCard = async (idProductClicked) => {
    if (!isModeAdmin) return

    await setIsCollapsed(false)
    await setCurrentTabSelected("edit")
    const productClickedOn = menu.find((product) => product.id === idProductClicked)
    await setProductSelected(productClickedOn)
    titleEditRef.current.focus()
  }

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAddMenu,
    handleDeleteMenu,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
    handleSelectedCard,
  }

  // affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className='container'>
          <Navbar/>
          <MainRightSide/>
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>

  )
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
