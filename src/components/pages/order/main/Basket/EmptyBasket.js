import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function EmptyBasket() {
  return (
    <EmptyBasketStyled>
        <span className='empty-message'>Votre commande est vide.</span>
    </EmptyBasketStyled>
  )
}

const EmptyBasketStyled = styled.div`
    flex: 1;
    box-shadow: ${theme.shadows.basket};
    background-color: ${theme.colors.background_white};
    
    .empty-message {
        display: flex;
        height: calc(95vh - 10vh - 70px - 70px);
        text-align: center;
        flex: 1;
        justify-content: center;
        align-items: center;
        align-self: center;
        line-height: 2;
        font-family: ${theme.fonts.families.stylish};
        font-size: ${theme.fonts.size.P4};
        color: ${theme.colors.greyBlue};
    }
`;