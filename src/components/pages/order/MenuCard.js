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

    .product {
        border-radius: 15px;
        width: 240px;
        height: 330px;
        box-shadow: -8px 8px 20px rgba(0, 0, 0, 0.2);

        .product__img {
            width: 200px;
            height: 145px;
            margin: 0 auto;

            img {
                max-width: 100%;
                height: auto;
                object-fit: cover;
            }
        }

        .product__title{
            font-size: ${theme.fonts.size.P4};
            font-family: "Amatic SC", cursive;
            font-weight: ${theme.fonts.weights.bold};
            line-height: 45px;
            margin-left: 25px;
            text-overflow: ellipsis;
            overflow: hidden; 
            width: 185px; 
            white-space: nowrap;
        }
        .product__infos{
            display: flex;
            justify-content: space-around;
            .product__price {
                color: ${theme.colors.primary};
            }
            .product__btn {
                padding: 16px 24px;
            }
        }
    }
`;
