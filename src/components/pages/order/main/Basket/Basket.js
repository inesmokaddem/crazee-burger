import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Header from '../../../../reusable-ui/Header';

export default function Basket() {
  return (
    <BasketStyled>
      <Header>head</Header>
      <div className='body'>body</div>
      <Header>footer</Header>

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