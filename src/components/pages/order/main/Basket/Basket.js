import React, { useContext } from 'react'
import styled from 'styled-components';
import Total from './Total';
import Footer from './Footer';
import { formatPrice } from '../../../../../utils/maths';
import EmptyBasket from './EmptyBasket';
import OrderContext from '../../../../../context/OrderContext';
import BasketProducts from './BasketProducts';

export default function Basket() {
  const {basket} = useContext(OrderContext)
  const isBasketEmpty = basket.length === 0

  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(0)}/>
        {isBasketEmpty ? <EmptyBasket/> : <BasketProducts/>}
        {/* <EmptyBasket basket={basket}/> */}
        <Footer/>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
`;