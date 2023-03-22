import React, { useState } from 'react'
import styled from 'styled-components';
import { fakeMenu2 } from '../../../data/fakeMenu';
import PrimaryButton from '../../reusable-ui/PrimaryButton';

export default function MenuCard() {

    const [products, setProducts] = useState(fakeMenu2);

  return (
    <MenuCardStyled>
        {products.map((product) => {
            return <div className='product'>
                        <p>{product.title}</p>
                        <p>{product.price}</p>

                    </div>
        })}
    </MenuCardStyled>
  )
}

const MenuCardStyled = styled.div`
    border: 1px solid green;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;

    .product {
        border: 1px solid purple;
        width: 240px;
        height: 330px;
    }
`;
