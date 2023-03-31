import { useState } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../context/OrderContext';
import { theme } from '../../../theme';
import Main from './main/Main';
import Navbar from './navbar/Navbar';

export default function OrderPage(){
  // state 
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentSelectedTab, setCurrentSelectedTab] = useState("add")
  // comportements
  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentSelectedTab,
    setCurrentSelectedTab,
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

