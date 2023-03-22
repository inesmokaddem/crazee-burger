import React, { useState } from 'react'
import styled from 'styled-components';
import { fakeMenu2 } from '../../../data/fakeMenu';
import { theme } from '../../../theme';
import PrimaryButton from '../../reusable-ui/PrimaryButton';

export default function MenuCard(product) {

    const [products, setProducts] = useState(fakeMenu2);

  return (
    <MenuCardStyled>
        {products.map((product) => {
            return (
            <div className='product'>
                <div className='product__img'>
                    <img src={product.imageSource} alt={product.title}></img>
                </div>
                <div className='product__description'>
                    <p className='product__title'>{product.title}</p>
                    <div className='product__infos'>
                        <p className='product__price'>{product.price} €</p>
                        <PrimaryButton label={"Ajouter"} />
                    </div>
                </div>
            </div>
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
                width: 100%;
                height: auto;
            }
        }

        .product__title{
            font-size: ${theme.fonts.size.P4};
            font-family: "Amatic SC", cursive;
            font-weight: ${theme.fonts.weights.bold};
            line-height: 45px;
            margin-left: 25px;
            /* identical to box height */

            display: flex;
            align-items: center;
        }
        .product__infos{
            display: flex;
            justify-content: space-around;
            .product__price {
                color: ${theme.colors.primary};
            }
        }
    }
`;
