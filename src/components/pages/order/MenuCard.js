import React, { useState } from 'react'
import styled from 'styled-components';
import { fakeMenu2 } from '../../../data/fakeMenu';
import { theme } from '../../../theme';
import Products from './Products';

export default function MenuCard(product) {

    const [products, setProducts] = useState(fakeMenu2);

  return (
    <MenuCardStyled>
        {products.map((product) => {
            return (
                <Products key={product.id} title={product.title} imageSource={product.imageSource} price={product.price}/>
            )
        })}
    </MenuCardStyled>
  )
}

const MenuCardStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
`;
