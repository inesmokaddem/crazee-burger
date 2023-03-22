import styled from "styled-components";
import { theme } from "../../../theme";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

export default function Products({title, imageSource, price}) {
  return (
    <ProductsStyled>
        <div className='product__img'>
            <img src={imageSource} alt={title}></img>
        </div>
        <div className='product__description'>
            <p className='product__title'>{title}</p>
            <div className='product__infos'>
                <p className='product__price'>{price} €</p>
                <PrimaryButton className="product__btn" label={"Ajouter"} />
            </div>
        </div>
    </ProductsStyled>
  )
}

const ProductsStyled = styled.div`
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
`;
