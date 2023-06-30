import { useRef, useState } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../context/OrderContext';
import { theme } from '../../../theme';
import Navbar from './navbar/Navbar';
import { EMPTY_PRODUCT } from "../../../enums/product";
import Main from './Main/Main';
import { useMenu } from '../../../hooks/useMenu';
import { useBasket } from '../../../hooks/useBasket';


export default function OrderPage(){
  // state 
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
  const titleEditRef = useRef()
  const {menu, handleAddMenu, handleDeleteMenu, handleEditMenu, resetMenu} = useMenu()
  const {basket, handleAddToBasket} = useBasket()



 

  const handleSelectedCard = async (idProductClicked) => {
    if (!isModeAdmin) return

    await setIsCollapsed(false)
    await setCurrentTabSelected("edit")
    const productClickedOn = menu.find((product) => product.id === idProductClicked)
    // const productClickedOn = find(idProductClicked, menu)
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
    handleEditMenu,
    titleEditRef,
    handleSelectedCard,
    basket,
    handleAddToBasket,
  }

  // affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className='container'>
          <Navbar/>
          <Main/>
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
