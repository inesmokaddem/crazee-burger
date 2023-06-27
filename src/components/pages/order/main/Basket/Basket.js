import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Header from '../../../../reusable-ui/Header';
import Total from './Total';
import Footer from './Footer';
import { formatPrice } from '../../../../../utils/maths';

export default function Basket() {
  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(0)}/>
        <div className='body'>body</div>
        <Header>
          <Footer/>
        </Header>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;

  .body {
    flex: 1;
    box-shadow: ${theme.shadows.basket};
    background-color: ${theme.colors.background_white};
  }
`;